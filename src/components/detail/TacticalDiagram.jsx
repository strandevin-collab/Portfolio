import React, { useState, useMemo, useCallback, useEffect } from 'react'
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  Handle,
  Position,
  getBezierPath,
  useReactFlow
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import {
  Maximize2,
  Minimize2,
  Focus,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  GitBranch
} from 'lucide-react'

// 1. High-Speed "Quick Data Transfer" Particle Edge
function DataTransferEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data
}) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  })

  const speed = data?.speed || '0.75s'
  const accent = data?.color || '#38bdf8'
  const isTaskEdge = Boolean(data?.isTask)

  return (
    <>
      {/* Background ambient glow track */}
      <path
        d={edgePath}
        fill="none"
        stroke={accent}
        strokeOpacity={0.12}
        strokeWidth={isTaskEdge ? 3 : 5}
      />

      {/* Main pulsing circuit wire */}
      <path
        id={id}
        d={edgePath}
        fill="none"
        stroke={accent}
        strokeWidth={isTaskEdge ? 1.8 : 2.5}
        className={isTaskEdge ? 'data-transfer-wire-task' : 'data-transfer-wire'}
        style={{ stroke: accent }}
      />

      {/* Primary Traveling Data Packet Particle (White Core with Neon Aura) */}
      <circle r={isTaskEdge ? 2.5 : 3.5} fill="#ffffff" filter="drop-shadow(0 0 6px #38bdf8)">
        <animateMotion
          dur={speed}
          repeatCount="indefinite"
          path={edgePath}
        />
      </circle>

      {/* Secondary Trailing Telemetry Bead */}
      <circle r={isTaskEdge ? 1.5 : 2} fill={accent} opacity={0.85}>
        <animateMotion
          dur={speed}
          begin="0.22s"
          repeatCount="indefinite"
          path={edgePath}
        />
      </circle>
    </>
  )
}

// 2. Central Hub Command Node
function HubCommandNode({ data }) {
  return (
    <div className="relative group">
      {/* Radiant Pulse Glow */}
      <div className="absolute -inset-2 rounded-[2rem] bg-sapphire-glow/20 blur-md animate-pulse pointer-events-none" />

      <div className="relative min-w-[240px] max-w-[280px] p-5 rounded-3xl bg-navy-950/95 border-2 border-sapphire-light/50 backdrop-blur-xl shadow-[0_20px_50px_rgba(2,6,17,0.95)] text-center text-ivory">
        {/* Source Handle Left (Outputs to Left Wing) */}
        <Handle
          type="source"
          position={Position.Left}
          id="hub-left"
          className="!bg-sapphire-light !w-3 !h-3 !border-2 !border-navy-950 !-left-2 shadow-[0_0_12px_#38bdf8]"
        />

        {/* Hub Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sapphire/20 border border-sapphire-light/30 text-[10px] font-mono font-bold tracking-widest text-sapphire-light uppercase mb-2 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-sapphire-glow animate-ping" />
          <span>{data.code || 'COMMAND HUB'}</span>
        </div>

        {/* Project Name */}
        <h3 className="font-mono text-sm font-bold text-ivory-50 tracking-wide leading-snug">
          {data.label}
        </h3>

        {/* Subtitle / Key Metric */}
        {data.subtitle && (
          <p className="mt-2 text-[11px] font-sans font-light text-ivory-300 leading-relaxed border-t border-white/10 pt-2">
            {data.subtitle}
          </p>
        )}

        {/* Source Handle Right (Outputs to Right Wing) */}
        <Handle
          type="source"
          position={Position.Right}
          id="hub-right"
          className="!bg-sapphire-light !w-3 !h-3 !border-2 !border-navy-950 !-right-2 shadow-[0_0_12px_#38bdf8]"
        />
      </div>
    </div>
  )
}

// 3. Major Phase Branch Node (Clickable / Expandable)
function PhaseBranchNode({ data }) {
  const isLeft = data.side === 'left'
  const isExpanded = data.isExpanded
  const taskCount = data.tasks ? data.tasks.length : 0

  return (
    <div
      onClick={data.onToggle}
      className={`relative cursor-pointer transition-all duration-300 hover:scale-[1.03] select-none ${
        isExpanded ? 'ring-2 ring-sapphire-light/60 shadow-[0_0_24px_rgba(56,189,248,0.35)]' : ''
      }`}
    >
      {/* Target Handle connecting from Central Hub */}
      <Handle
        type="target"
        position={isLeft ? Position.Right : Position.Left}
        id="branch-target"
        className="!bg-sapphire-light !w-2.5 !h-2.5 !border-2 !border-navy-950"
      />

      <div className="min-w-[210px] max-w-[250px] p-4 rounded-2xl bg-navy-900/95 border border-white/10 backdrop-blur-md shadow-xl text-ivory">
        {/* Phase Header Bar */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className={`text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full border ${data.badgeColor || 'bg-navy-850 text-slate-300 border-white/10'}`}>
            {data.phaseCode}
          </span>
          <span className="text-[10px] font-mono text-slate-400">
            {taskCount} {taskCount === 1 ? 'Task' : 'Tasks'}
          </span>
        </div>

        {/* Phase Title */}
        <div className="font-mono text-xs font-bold text-ivory leading-snug mb-3">
          {data.phaseName}
        </div>

        {/* Interactive Expand / Collapse Pill */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between">
          <span className={`text-[10px] font-mono font-medium px-2 py-1 rounded-lg flex items-center gap-1.5 transition-colors ${
            isExpanded
              ? 'bg-sapphire-light text-navy-950 font-bold shadow-sm'
              : 'bg-navy-950 text-sapphire-light border border-sapphire-light/30 hover:bg-sapphire/20'
          }`}>
            <span>{isExpanded ? '− Collapse' : `+ Expand (${taskCount})`}</span>
          </span>

          <span className="text-slate-400">
            {isLeft ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </span>
        </div>
      </div>

      {/* Source Handle connecting to child tasks */}
      <Handle
        type="source"
        position={isLeft ? Position.Left : Position.Right}
        id="branch-source"
        className="!bg-white !w-2.5 !h-2.5 !border-2 !border-navy-950"
      />
    </div>
  )
}

// 4. WBS Task Leaf Node
function TaskLeafNode({ data }) {
  const isLeft = data.side === 'left'

  return (
    <div className="relative transition-all duration-200 hover:scale-[1.02]">
      {/* Target Handle connecting from parent branch */}
      <Handle
        type="target"
        position={isLeft ? Position.Right : Position.Left}
        id="task-target"
        className="!bg-sapphire-light !w-2 !h-2 !border-2 !border-navy-950"
      />

      <div className="min-w-[230px] max-w-[270px] p-3 rounded-xl bg-navy-950/90 border border-sapphire-light/20 backdrop-blur-md shadow-lg text-ivory">
        {/* Task Header: Code & Meta Tag */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[10px] font-mono font-bold text-sapphire-light">
            WBS {data.code}
          </span>
          {data.meta && (
            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-navy-900 border border-white/10 text-slate-300">
              {data.meta}
            </span>
          )}
        </div>

        {/* Task Title */}
        <div className="font-mono text-xs font-semibold text-ivory leading-snug mb-1">
          {data.title}
        </div>

        {/* Task Description */}
        <p className="font-sans text-[11px] font-light text-ivory-300 leading-tight">
          {data.desc}
        </p>
      </div>
    </div>
  )
}

// 5. Legacy Tactical Node for fallback
function TacticalCustomNode({ data }) {
  return (
    <div className="min-w-[190px] max-w-[250px] p-3.5 rounded-2xl bg-navy-950/95 backdrop-blur-md shadow-2xl border border-white/10 text-ivory">
      <Handle type="target" position={Position.Left} className="!bg-sapphire-light !w-2.5 !h-2.5" />
      {data.phase && (
        <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-navy-850 text-slate-300 mb-1 inline-block">
          {data.phase}
        </span>
      )}
      <div className="font-mono text-xs font-bold text-ivory mb-1">{data.label}</div>
      {data.sub && <div className="font-sans text-[11px] text-ivory-300 font-light">{data.sub}</div>}
      <Handle type="source" position={Position.Right} className="!bg-white !w-2.5 !h-2.5" />
    </div>
  )
}

const nodeTypes = {
  hubNode: HubCommandNode,
  branchNode: PhaseBranchNode,
  taskNode: TaskLeafNode,
  custom: TacticalCustomNode,
  default: TacticalCustomNode
}

const edgeTypes = {
  dataTransfer: DataTransferEdge
}

// Internal Flow Canvas
function MindMapCanvas({ mindMap, diagramData, item }) {
  const { fitView } = useReactFlow()

  // State: Set of expanded branch IDs. Default: empty set (COLLAPSED as requested)
  const [expandedBranches, setExpandedBranches] = useState(() => new Set())

  const toggleBranch = useCallback((branchId) => {
    setExpandedBranches(prev => {
      const next = new Set(prev)
      if (next.has(branchId)) {
        next.delete(branchId)
      } else {
        next.add(branchId)
      }
      return next
    })
  }, [])

  const expandAll = useCallback(() => {
    if (!mindMap?.branches) return
    setExpandedBranches(new Set(mindMap.branches.map(b => b.id)))
  }, [mindMap])

  const collapseAll = useCallback(() => {
    setExpandedBranches(new Set())
  }, [])

  // Auto-fit camera whenever expansion state changes
  useEffect(() => {
    const timer = setTimeout(() => {
      fitView({ padding: 0.22, duration: 400 })
    }, 50)
    return () => clearTimeout(timer)
  }, [expandedBranches, fitView])

  // Dual-Wing Radial Layout Generator
  const { nodes, edges } = useMemo(() => {
    if (!mindMap?.branches) {
      // Fallback to legacy diagramData if no mindMap defined
      return {
        nodes: diagramData?.nodes || [],
        edges: diagramData?.edges || []
      }
    }

    const { hub, branches } = mindMap
    const leftBranches = branches.filter(b => b.side === 'left')
    const rightBranches = branches.filter(b => b.side === 'right')

    const resultNodes = []
    const resultEdges = []

    // 1. Add Central Hub Node
    resultNodes.push({
      id: 'hub',
      type: 'hubNode',
      position: { x: 0, y: 0 },
      data: {
        code: hub.code,
        label: hub.label,
        subtitle: hub.subtitle,
        accent: hub.accent
      }
    })

    // Layout helper for symmetrical wings
    const layoutWing = (wingBranches, isLeft) => {
      const branchX = isLeft ? -380 : 380
      const count = wingBranches.length

      wingBranches.forEach((branch, idx) => {
        // Vertical spacing of branch nodes around Y = 0
        let branchY = 0
        if (count === 2) {
          branchY = idx === 0 ? -120 : 120
        } else if (count === 3) {
          branchY = (idx - 1) * 160
        } else if (count > 3) {
          branchY = (idx - (count - 1) / 2) * 140
        }

        const isExpanded = expandedBranches.has(branch.id)

        // 2. Add Branch Node
        resultNodes.push({
          id: branch.id,
          type: 'branchNode',
          position: { x: branchX, y: branchY },
          data: {
            ...branch,
            side: isLeft ? 'left' : 'right',
            isExpanded,
            onToggle: () => toggleBranch(branch.id)
          }
        })

        // Edge: Hub -> Branch (Quick Data Transfer)
        resultEdges.push({
          id: `edge-hub-${branch.id}`,
          source: 'hub',
          sourceHandle: isLeft ? 'hub-left' : 'hub-right',
          target: branch.id,
          targetHandle: 'branch-target',
          type: 'dataTransfer',
          data: {
            speed: '0.75s',
            color: branch.accent || '#38bdf8',
            isTask: false
          }
        })

        // 3. If Expanded: Add Child Task Nodes
        if (isExpanded && branch.tasks && branch.tasks.length > 0) {
          const taskX = isLeft ? -800 : 800
          const taskCount = branch.tasks.length
          const taskSpacing = 100
          const startY = branchY - ((taskCount - 1) * taskSpacing) / 2

          branch.tasks.forEach((task, tIdx) => {
            const taskId = `${branch.id}-task-${tIdx}`
            const taskY = startY + tIdx * taskSpacing

            resultNodes.push({
              id: taskId,
              type: 'taskNode',
              position: { x: taskX, y: taskY },
              data: {
                ...task,
                side: isLeft ? 'left' : 'right'
              }
            })

            // Edge: Branch -> Task Leaf (Quick Data Transfer)
            resultEdges.push({
              id: `edge-${branch.id}-${taskId}`,
              source: branch.id,
              sourceHandle: 'branch-source',
              target: taskId,
              targetHandle: 'task-target',
              type: 'dataTransfer',
              data: {
                speed: '1.05s',
                color: branch.accent || '#38bdf8',
                isTask: true
              }
            })
          })
        }
      })
    }

    // Generate Left Wing and Right Wing
    layoutWing(leftBranches, true)
    layoutWing(rightBranches, false)

    return { nodes: resultNodes, edges: resultEdges }
  }, [mindMap, diagramData, expandedBranches, toggleBranch])

  const totalBranches = mindMap?.branches?.length || 0
  const isAllExpanded = totalBranches > 0 && expandedBranches.size === totalBranches

  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden bg-navy-950/95 shadow-2xl">
      {/* Top Tactical Command Toolbar */}
      <div className="absolute top-3 left-3 right-3 z-10 flex flex-wrap items-center justify-between gap-2 pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sapphire-glow animate-ping" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-ivory-100 bg-navy-900/90 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-md">
            Dual-Wing Radial Mind Map
          </span>
          <span className="hidden sm:inline-flex text-[10px] font-mono text-slate-400 bg-navy-950/80 px-2.5 py-1 rounded-full border border-white/5">
            {expandedBranches.size === 0
              ? 'Collapsed to Hub'
              : `${expandedBranches.size} of ${totalBranches} Branches Expanded`}
          </span>
        </div>

        {/* Global Expand / Collapse / Center Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={isAllExpanded ? collapseAll : expandAll}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-900/90 hover:bg-navy-850 border border-sapphire-light/30 text-xs font-mono text-ivory transition-all shadow-md active:scale-95"
            title={isAllExpanded ? 'Collapse all to hub' : 'Expand all branches'}
          >
            {isAllExpanded ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-sapphire-light" />
                <span>Collapse to Hub</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-sapphire-light" />
                <span>Expand All</span>
              </>
            )}
          </button>

          <button
            onClick={() => fitView({ padding: 0.22, duration: 400 })}
            className="p-1.5 rounded-xl bg-navy-900/90 hover:bg-navy-850 border border-white/10 text-slate-300 hover:text-ivory transition-all shadow-md"
            title="Reset / Center Camera"
          >
            <Focus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Interaction Guide */}
      <div className="absolute bottom-3 left-4 z-10 text-[10px] font-mono text-slate-400 bg-navy-900/90 border border-white/5 px-3 py-1 rounded-full shadow-md pointer-events-none flex items-center gap-2">
        <GitBranch className="w-3 h-3 text-sapphire-light" />
        <span>Click branch to expand tasks • Drag canvas • Scroll to zoom</span>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.22 }}
        panOnScroll={false}
        panOnDrag={[1, 2]}
        zoomOnScroll={true}
        preventScrolling={false}
        minZoom={0.2}
        maxZoom={1.8}
        className="tactical-flow"
      >
        <Background color="#101f42" gap={22} size={1.2} />
        <Controls
          className="m-3 shadow-lg"
          showInteractive={false}
        />
        <MiniMap
          nodeColor={(node) => {
            if (node.type === 'hubNode') return '#38bdf8'
            if (node.type === 'branchNode') return node.data?.accent || '#60a5fa'
            return '#1e293b'
          }}
          maskColor="rgba(4, 8, 18, 0.85)"
          className="!bg-navy-900 !rounded-xl shadow-xl !border !border-white/10"
          style={{ width: 110, height: 75 }}
        />
      </ReactFlow>
    </div>
  )
}

export default function TacticalDiagram({ diagramData, mindMap, item }) {
  // Extract mindMap either from prop or from item
  const activeMindMap = mindMap || item?.mindMap

  return (
    <ReactFlowProvider>
      <MindMapCanvas
        mindMap={activeMindMap}
        diagramData={diagramData}
        item={item}
      />
    </ReactFlowProvider>
  )
}
