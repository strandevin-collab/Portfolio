import React, { useState, useEffect } from 'react'

const GLYPHS = '0123456789ABCDEF!@#$%&*<>{}[]/\\~§±'

export default function TerminalDecoder({
  text = '',
  speed = 25,
  delay = 100,
  className = '',
  scrambleRounds = 3
}) {
  const [displayText, setDisplayText] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let timeoutId
    let intervalId
    let iteration = 0
    const targetLength = text.length

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' '
              if (index < iteration / scrambleRounds) {
                return text[index]
              }
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
            })
            .join('')
        )

        if (iteration >= targetLength * scrambleRounds) {
          clearInterval(intervalId)
          setDisplayText(text)
          setIsDone(true)
        }

        iteration += 1
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, speed, delay, scrambleRounds])

  return (
    <span className={`font-mono transition-opacity ${className}`}>
      {displayText || text}
      {!isDone && (
        <span className="inline-block w-2 h-4 ml-1 bg-metallic-amber animate-pulse align-middle" />
      )}
    </span>
  )
}
