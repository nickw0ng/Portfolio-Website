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

  return <section if="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
          className={styles.hero}
          src={heroImg} 
          style={{ width: '375px', height: 'auto' }}
          alt="Profile picture of Nicholas Wong" 
        />
        <img 
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}>
        <h1>
          Nicholas 
          <br /> 
          Wong
        </h1>
        <h2>Software Engineer</h2>
        <span>
            <a href='https://www.linkedin.com/in/nicholas-wong18/' target="_blank">
                <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
            <a href='https://github.com/nickw0ng' target="_blank">
                <img src={githubIcon} alt="Linkedin icon" />
            </a>
        </span>
        <p>With a passion for Software Development and creating modern React apps.</p>
        <a href={CV} download>
          <button className="hover">
            Resume
          </button>
        </a>
    </div>
  </section>
  
}

export default Hero