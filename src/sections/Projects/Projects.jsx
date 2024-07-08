import styles from './ProjectsStyles.module.css'
import wordle from '../../assets/wordle.png'
import ProjectCard from '../../common/ProjectCard';
import klondike from '../../assets/klondike.png'
import video from '../../assets/video.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={video}
          link="https://github.com/nickw0ng/Wordle"

          h3="Video Manager"
          p="RESTful API using Flask"
        />

        <ProjectCard
          src={wordle}
          link="https://github.com/nickw0ng/Wordle"

          h3="Wordle"
          p="Puzzle Game"
        />

        <ProjectCard
          src={klondike}
          link="https://github.com/nickw0ng/Klondike"

          h3="Klondike (Solitaire)"
          p="Card Game"
        />
      </div>
    </section>
  )
}

export default Projects

