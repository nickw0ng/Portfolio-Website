import styles from './AboutStyles.module.css';

function About() {
  return (
    <section id="about" className={`${styles.container} no-particles`}>
      <div className={styles.titleContainer}>
        <h1 className="sectionTitle">About Me</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Hi, I'm Nicholas Wong, a fourth-year Computer Science student at Northeastern University with a concentration in Artificial Intelligence. My journey began here at Northeastern, where I entered as an undecided major. After taking my first coding classes, I quickly developed a passion for solving complex problems and thinking outside the box to solve unique problems. The challenge of building solutions through code sparked my interest, and that excitement led me to pursue a career in computer science.
          </p>
          <p>
            Since then, I've developed a strong interest in full-stack development, particularly in building modern React applications and user-friendly interfaces backed by robust systems. I also enjoy working with AI concepts, especially when it comes to automating everyday tasks and designing tools that help people work and live more efficiently.
          </p>
          <p>
            Outside of coding, I enjoy staying active by going to the gym, playing basketball, and finding ways to move and stay energized. I also value spending time with classmates, coworkers, and friends, whether we're collaborating, relaxing, or just catching up. In addition, I compete in regional and global esports tournaments, where I compete in the highest level of gaming from all around the world, for large cash prizes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About; 