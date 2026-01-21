type Project = {
  title: string
  description: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: 'Cloth sim using js',
    description: 'Cloth simulation using javascript following verlet physics integration',
    image: '/assets/cloth.png',
    link: 'https://a0d1i2l3.github.io/Javascript-cloth-simulation/',
  },
  {
    title: 'Minesweeper',
    description: 'Web-based Minesweeper with dynamic grid resizing, timer, and flagging.',
    image: '/assets/minesweeper.png',
    link: 'https://a0d1i2l3.github.io/Minesweeper/',
  },
  {
    title: 'Schedulo',
    description: 'Effortless, secure event registrations without the hassle of passes.',
    image: '/assets/schedulo.png',
    link: 'https://undecided-lilac.vercel.app/',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="pros">
        {projects.map((project) => (
          <a key={project.link} className="project-card" href={project.link} target="_blank" rel="noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt={project.title} className="project-img" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </a>
        ))}
      </div>
      <div className="see-more-btn-wrapper">
        <a href="https://github.com/A0D1I2L3?tab=repositories" target="_blank" rel="noreferrer" className="btn">
          See more projects
        </a>
      </div>
    </section>
  )
}

