'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-card">
            <h2 className="about-title">About Me</h2>
            <p className="about-content">
              I&apos;m a passionate full-stack MERN developer with a keen interest in frontend technologies. 
              I love to explore and experiment with JavaScript, always seeking new ways to create 
              engaging and interactive web experiences. When I&apos;m not coding, you can find me tweaking 
              around with the latest web technologies or contributing to open-source projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

