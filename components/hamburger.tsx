import { useState, useRef, useEffect } from 'react'
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../styles/HamburgerMenu.module.css"
import Link from 'next/link'

function HamburgerMenu() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const hamburgerRef = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    })

    const handleClickOutside = (event) => {
        if (hamburgerRef.current && navbarOpen && !hamburgerRef.current.contains(event.target)) {
            setNavbarOpen(prev => !prev)
        }
    }
  
    return(
        <div ref={hamburgerRef}>
            <nav className={styles.navBar}>
                <div className={styles.navBarButton} onClick={() => setNavbarOpen(!navbarOpen)}>
                    {navbarOpen ?
                        (<FontAwesomeIcon icon={faCircleXmark} size={"2x"} />)
                    :
                        (<FontAwesomeIcon icon={faBars} size={"2x"} />)
                    }
                </div>
                <div className={`${styles.navMenu} ${navbarOpen ? styles.navOpen : styles.navClosed}`}>
                    <ul className={styles.navList}>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link href='/projects'>Projects</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default HamburgerMenu