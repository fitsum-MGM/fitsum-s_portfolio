'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { projectsData, type Project } from '@/data/projects'
import { personalInfo } from '@/data/personal'

function ImageSlider({ project }: { project: Project }) {
  const imgs = project.images && project.images.length > 0 ? project.images : [project.image]
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const many = imgs.length > 1

  useEffect(() => {
    if (!many || paused) return
    const t = setInterval(() => setI((v) => (v + 1) % imgs.length), 3500)
    return () => clearInterval(t)
  }, [many, paused, imgs.length])

  const go = (n: number) => setI((n + imgs.length) % imgs.length)

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-slate-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {imgs.map((src, n) => (
        <img
          key={src}
          src={src}
          alt={`${project.imageAlt} ${n + 1} of ${imgs.length}`}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${n === i ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {many && (
        <>
          <button
            onClick={() => go(i - 1)}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-black/70 transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => go(i + 1)}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-black/70 transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1 rounded-full bg-black/40">
            {imgs.map((_, n) => (
              <button
                key={n}
                onClick={() => setI(n)}
                aria-label={`Show image ${n + 1}`}
                className={`h-1.5 rounded-full transition-all ${n === i ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Projects() {
  const { projects } = personalInfo
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            <span>
              {projects.heading.split(' ').slice(0, -1).join(' ')}{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              {projects.heading.split(' ').slice(-1)[0]}
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-center mb-16 text-lg">
            {projects.subheading}
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, i) => {
              const isExpanded = expandedId === project.id

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-xl"
                >
                  {/* Project Images */}
                  <ImageSlider project={project} />

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-cyan-500 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description (Expandable) */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 72 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {(isExpanded
                          ? project.description
                          : project.description.slice(0, 2)
                        ).map((point, idx) => (
                          <li
                            key={`${project.id}-${idx}-${point.slice(0, 10)}`}
                          >
                            • {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Read More / Less */}
                    {project.description.length > 2 && (
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : project.id)
                        }
                        className="mt-3 text-sm font-medium text-cyan-500 hover:text-cyan-600 transition"
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </button>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 mb-4">
                      {project.tags.slice(0, 4).map((tag, j) => (
                        <span
                          key={`${project.id}-tag-${j}`}
                          className="px-3 py-1 text-xs font-medium bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full border border-cyan-200 dark:border-cyan-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mr-5 text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
                      >
                        GitHub <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    {/* Live Link */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
                      >
                        View Project <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
