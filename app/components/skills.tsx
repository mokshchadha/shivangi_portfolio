'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Express', level: 80 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Next.js', level: 70 },
  { name: 'TypeScript', level: 65 },
]

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-card">
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

