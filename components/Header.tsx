'use client'

type Props = {
  activeSection: 'home' | 'projects' | 'skills' | 'contact'
}

export default function Header({ activeSection }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: Props['activeSection']) => {
    e.preventDefault()
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <a href="" className="important" />
      <nav className="navbar">
        <a
          href="#home"
          className={activeSection === 'home' ? 'active' : ''}
          onClick={(e) => handleClick(e, 'home')}
        >
          Home
        </a>
        <a
          href="#projects"
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={(e) => handleClick(e, 'projects')}
        >
          Projects
        </a>
        <a
          href="#skills"
          className={activeSection === 'skills' ? 'active' : ''}
          onClick={(e) => handleClick(e, 'skills')}
        >
          Skills
        </a>
        <a
          href="#contact"
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => handleClick(e, 'contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  )
}

