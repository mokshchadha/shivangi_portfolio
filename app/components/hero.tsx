'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MoonIcon, SunIcon } from 'lucide-react'

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="hero">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-content"
      >
        <motion.h1 variants={itemVariants}>
          Shivangi
        </motion.h1>
        <motion.p variants={itemVariants}>
          Full Stack MERN Developer | Frontend Enthusiast
        </motion.p>
        <motion.div variants={itemVariants}>
          {/* <a href="#projects" className="hero-button">View My Work</a> */}
          Scroll to know more
        </motion.div>
      </motion.div>
      <motion.div
        className="dark-mode-toggle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
      </motion.div>
      <div className="blob-animation">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </motion.div>
      </div>
    </section>
  )
}

