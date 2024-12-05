'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack MERN e-commerce platform with user authentication, product management, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A responsive task management application with real-time updates using Socket.io and Redux for state management.',
    tags: ['React', 'Redux', 'Socket.io', 'Node.js'],
    link: '#',
  },
  {title: 'Weather Dashboard',
    description: 'An interactive weather dashboard using OpenWeatherMap API, featuring location-based forecasts and animated weather icons.',
    tags: ['JavaScript', 'API Integration', 'CSS Animations'],
    link: '#',
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="#projects" className="projects">
      <div className="container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="project-tag"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="project-link"
                  style={{
                    backgroundColor: hoveredIndex === index ? '#7e22ce' : '',
                  }}
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

