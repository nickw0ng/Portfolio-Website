import { useTypewriter, Cursor } from 'react-simple-typewriter';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext'


function Hero() {
  const { theme, toggleTheme } = useTheme()

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  /* Typewriting effects showing the role that I have.
    Need to find a way to not shift the page when the Typewriting  effect is  empty
  */
  const [typeEffect] = useTypewriter({
    words: ['Software Engineer', 'Student', 'Web Developer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  })


  return <section className={styles.container}>
    <div className={styles.imageContainer}>
      <img 
        className={styles.hero}
        src={heroImg} 
        alt="Profile picture of Nicholas Wong"  
      />
      <div className={styles.themeIconWrapper}>
        <img 
          className={styles.colorModeInline}
          src={themeIcon} 
          alt="Color mode icon" 
          onClick={toggleTheme}
        />
        <span className={styles.themeTooltip}>Switch theme</span>
      </div>
    </div>
    <div className={styles.info}>
        <div className={styles.nameRow}>
          <h1>
            Nicholas<br />Wong
          </h1>
        </div>
        <h2> 
          <span> {typeEffect}</span>
          <Cursor cursorStyle="|" />
        </h2>
        <p className={styles.description}>
          With a passion for Software Development, Web Development, and Artificial Intelligence</p>
        <div className={styles.socialLinks}>
          <a href='https://www.linkedin.com/in/nicholas-wong18/' target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href='https://github.com/nickw0ng' target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Linkedin icon" />
          </a>
        </div>
        <a href={CV} download className="hover">
          <button>
             Resume 
          </button>
        </a>
    </div>
    <div className={styles.scrollIndicator}>
      <span className={styles.scrollArrow}>↓</span>
    </div>
  </section>
  
}

export default Hero