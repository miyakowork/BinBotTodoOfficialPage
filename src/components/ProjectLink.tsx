import type { ReactNode } from 'react'
import { projectStatus } from '../content/site'

interface ProjectLinkProps {
  children: ReactNode
  className?: string
}

export default function ProjectLink({ children, className = '' }: ProjectLinkProps) {
  return (
    <a
      className={className}
      href={projectStatus.githubUrl}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}
