import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Custom vertex shader for topographical elevation
const topoVertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;
  varying float vElevation;

  // Simple pseudo-random & noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Multi-octave topographical terrain computation
    float n1 = noise(pos.xy * 0.45 + vec2(uTime * 0.03, uTime * 0.02));
    float n2 = noise(pos.xy * 0.9 - vec2(uTime * 0.02, uTime * 0.04)) * 0.5;
    float n3 = noise(pos.xy * 1.8 + vec2(uMouse * 0.5)) * 0.25;
    
    // Mouse interactive ripples
    float dist = distance(pos.xy, uMouse * 4.0);
    float ripple = sin(dist * 2.5 - uTime * 0.8) * exp(-dist * 0.3) * 0.35;

    float elevation = (n1 + n2 + n3 + ripple) * 1.2;
    pos.z += elevation;
    vElevation = pos.z;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

// Fragment shader for dark-on-dark contour elevation lines
const topoFragmentShader = `
  uniform vec3 uColorBg;
  uniform vec3 uColorLine;
  uniform vec3 uColorGlow;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    // Generate fine topographical contour lines along elevation levels
    float contourFrequency = 18.0;
    float lineValue = fract(vElevation * contourFrequency);
    float lineWidth = 0.08;
    
    // Crisp contour anti-aliasing
    float line = smoothstep(lineWidth, 0.0, abs(lineValue - 0.5));
    
    // Major contour lines every 4th step
    float majorLineValue = fract(vElevation * (contourFrequency / 4.0));
    float majorLine = smoothstep(0.12, 0.0, abs(majorLineValue - 0.5)) * 1.5;

    // Blend faint dark-on-dark metallic palette
    vec3 col = uColorBg;
    col += uColorLine * (line * 0.28);
    col += uColorGlow * (majorLine * 0.4);

    // Edge vignette falloff
    float d = distance(vUv, vec2(0.5));
    col *= clamp(1.15 - d * 0.9, 0.0, 1.0);

    gl_FragColor = vec4(col, 0.85);
  }
`

function TopoMesh({ mouse }) {
  const meshRef = useRef()
  const targetMouse = useRef(new THREE.Vector2(0, 0))

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uColorBg: { value: new THREE.Color('#07090e') },
    uColorLine: { value: new THREE.Color('#d97736') }, // Warm copper line
    uColorGlow: { value: new THREE.Color('#f59e0b') }, // Amber highlight
  }), [])

  useFrame((state, delta) => {
    if (!meshRef.current) return
    uniforms.uTime.value += delta

    // Smoothly interpolate mouse coordinates
    targetMouse.current.lerp(mouse.current, 0.05)
    uniforms.uMouse.value.copy(targetMouse.current)

    // Gentle camera parallax oscillation
    meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.03
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 4, 0, 0]} position={[0, -0.5, -2]}>
      <planeGeometry args={[14, 12, 120, 120]} />
      <shaderMaterial
        vertexShader={topoVertexShader}
        fragmentShader={topoFragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  )
}

function PhysicalLighting({ mouse }) {
  const lightRef = useRef()

  useFrame(() => {
    if (lightRef.current) {
      // Light follows mouse in 3D world space
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, mouse.current.x * 6, 0.05)
      lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, mouse.current.y * 6, 0.05)
    }
  })

  return (
    <>
      <ambientLight intensity={0.4} color="#161b2e" />
      <pointLight ref={lightRef} position={[0, 0, 3]} intensity={1.5} color="#d97736" distance={10} />
      <directionalLight position={[5, 10, 7]} intensity={0.6} color="#f59e0b" />
    </>
  )
}

export default function TopographicalBackground() {
  const mouse = useRef(new THREE.Vector2(0, 0))

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalized device coordinates (-1 to +1)
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    const handleScroll = () => {
      const scrollY = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1)
      mouse.current.y += (scrollY - 0.5) * 0.2
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print webgl-canvas opacity-75">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <PhysicalLighting mouse={mouse} />
        <TopoMesh mouse={mouse} />
      </Canvas>
      {/* Subtle vignette radial mask to blend edges into deep dark background */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-950/40 to-dark-950 pointer-events-none" />
    </div>
  )
}
