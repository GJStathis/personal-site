import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <div className={styles.navbarRow}>
                <Link href="/">
                    Home
                </Link>
            </div>
            <div className={styles.navbarRow}>|</div>
            <div className={styles.navbarRow}>
                <Link href="/blog">
                    Blog
                </Link>
            </div>
            <div className={styles.navbarRow}>|</div>
            <div className={styles.navbarRow}>
                <Link href="/projects">
                    Projects
                </Link>
            </div>
        </div>
    )
}