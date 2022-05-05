import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <div className={styles.navbarRow}>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
            <div className={styles.navbarRow}>|</div>
            <div className={styles.navbarRow}>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </div>
            <div className={styles.navbarRow}>|</div>
            <div className={styles.navbarRow}>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
            </div>
        </div>
    )
}