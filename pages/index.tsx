import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Nice to meet you my name is Greg</h1>
        </div>
        <div className={styles.about}>
          <p>
            My interests include music, cooking, philosophy and yes coding! Right now I am in the middle of learning about various computer science topics. This is a site where I post anything that interests me have a look around.
          </p>
        </div>
        <div className={styles.linkIcons}>
          <div className={styles.linkIcon}>
            <a href="https://www.linkedin.com/in/greg-stathis-7a8b98ab/">
              <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
            </a>
          </div>
          <div className={styles.linkIcon}>
            <a href="https://github.com/GJStathis">
              <FontAwesomeIcon icon={faGithubSquare} size={"2x"} />
            </a>
          </div>
          <div className={styles.linkIcon}>
            <a href="mailto:gstathis22@gmail.com">
              <FontAwesomeIcon icon={faSquareEnvelope} size={"2x"} />
            </a>
          </div>
          <div className={styles.linkIcon}>
            <a href="gregory_stathis_resume.pdf" download>
              <FontAwesomeIcon icon={faFilePdf} size={"2x"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
