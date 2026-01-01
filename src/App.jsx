import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

const FireworkBurst = ({ delay, x, y }) => (
  <motion.span
    className="firework-burst"
    initial={{ scale: 0.4, opacity: 0 }}
    animate={{
      scale: [0.4, 1.2, 1.4, 0.8, 0],
      opacity: [0, 0.8, 1, 0.6, 0],
      rotate: [0, 25, -15],
      filter: ['blur(4px)', 'blur(0px)', 'blur(2px)', 'blur(6px)'],
    }}
    transition={{ duration: 3.8, repeat: Infinity, repeatDelay: 6, delay }}
    style={{ left: `${x}%`, top: `${y}%` }}
    aria-hidden="true"
  />
)

function App() {
  const [progress, setProgress] = useState(0)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (progress >= 100) {
      setProgress(100)
      return undefined
    }

    const incrementTimeout = window.setTimeout(() => {
      setProgress((current) => {
        if (current >= 100) return 100

        const easing = 6 + Math.random() * 10
        const nextValue = Math.min(current + easing, 100)
        return nextValue
      })
    }, 140)

    return () => window.clearTimeout(incrementTimeout)
  }, [progress])

  useEffect(() => {
    if (progress < 100) return undefined

    const revealTimeout = window.setTimeout(() => {
      setIsReady(true)
    }, 900)

    return () => window.clearTimeout(revealTimeout)
  }, [progress])

  const particles = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        id: index,
        size: 4 + Math.random() * 9,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 6 + Math.random() * 10,
        delay: Math.random() * 5,
      })),
    [],
  )

  const fireworks = useMemo(
    () =>
      Array.from({ length: 6 }, (_, index) => ({
        id: index,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 60,
        delay: index * 1.2,
      })),
    [],
  )

  const confettiPieces = useMemo(() => {
    const symbols = ['✨', '🎉', '🥂', '🌟', '💫']
    return Array.from({ length: 28 }, (_, index) => ({
      id: index,
      symbol: symbols[index % symbols.length],
      left: Math.random() * 100,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 4,
    }))
  }, [])

  return (
    <div className="scene">
      <div className="scene-gradient" aria-hidden="true" />
      <div className="ambient-field" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="ambient-particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="confetti-layer" aria-hidden="true">
        {confettiPieces.map((piece) => (
          <span
            key={piece.id}
            className="confetti-piece"
            style={{
              left: `${piece.left}%`,
              animationDuration: `${piece.duration}s`,
              animationDelay: `${piece.delay}s`,
            }}
          >
            {piece.symbol}
          </span>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!isReady && (
          <motion.section
            key="loading"
            className="loading-shell"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <motion.div
              className="loading-core"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <motion.p
                className="loading-subtext"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                New Year 2026 is Loading…
              </motion.p>
              <motion.h1
                className="loading-numerals"
                initial={{ opacity: 0.2, scale: 0.85 }}
                animate={{ opacity: [0.2, 1, 0.8], scale: [0.85, 1.05, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatType: 'reverse' }}
              >
                2026
              </motion.h1>
              <div className="loading-progress">
                <motion.span
                  className="loading-progress-fill"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </div>
              <motion.span
                className="loading-percentage"
                key={Math.round(progress)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.28 }}
              >
                {Math.round(progress)}%
              </motion.span>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isReady && (
          <motion.main
            key="main"
            className="app-shell"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div
              className="hero"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            >
              <motion.p
                className="hero-intro"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.85, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                A luminous journey begins
              </motion.p>
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.45, ease: 'easeOut' }}
              >
                Happy New Year 2026
              </motion.h1>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
              >
                May this year bring you good health, wealth, peace, and endless happiness.
              </motion.p>
            </motion.div>

            <motion.section
              className="family-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 1, ease: 'easeOut' }}
              whileHover={{ scale: 1.02, boxShadow: '0 24px 60px rgba(255, 223, 128, 0.25)' }}
            >
              <p className="card-greeting">With love and blessings,</p>
              <p className="card-signature">D.K Coswatte and Family</p>
            </motion.section>

            <div className="footer-glow">
              <div className="footer-sparkles" aria-hidden="true" />
              <p className="footer-note">Here is to a year of radiant possibilities and gentle beginnings.</p>
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      <div className="firework-layer" aria-hidden="true">
        {fireworks.map((item) => (
          <FireworkBurst key={item.id} delay={item.delay} x={item.x} y={item.y} />
        ))}
      </div>
    </div>
  )
}

export default App
