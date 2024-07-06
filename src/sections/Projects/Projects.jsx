import styles from './ProjectsStyles.module.css'
import wordle from '../../assets/wordle.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://github.com/nickw0ng/Wordle"
        target="_blank">
          <img className="hover" src={wordle} alt="Viberr logo" />
          <h3>Wordle</h3>
          <p>Word Puzzle Game</p>
        </a>
      </div>
    </section>
  )
}

export default Projects