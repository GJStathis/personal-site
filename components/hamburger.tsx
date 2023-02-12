// import { useState } from 'react'
// import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import styles from "../styles/HamburgerMenu.module.css"
// import Link from 'next/link'

// function HamburgerMenu() {
//     const [navbarOpen, setNavbarOpen] = useState(false);

//     return(
//         <nav className={styles.navBar}>
//             <div className={styles.navBarButton} onClick={() => setNavbarOpen(!navbarOpen)}>
//                 {navbarOpen ?
//                     (<FontAwesomeIcon icon={faCircleXmark} size={"2x"} />)
//                 :
//                     (<FontAwesomeIcon icon={faBars} size={"2x"} />)
//                 }
//             </div>
//             <ul className={`${styles.navMenu} ${navbarOpen ? styles.navOpen: ''}`}>
//                 <li>
//                     <Link href='/'>Home</Link>
//                 </li>
//                 <li>
//                     <Link href='/blog'>Blog</Link>
//                 </li>
//                 <li>
//                     <Link href='/projects'>Projects</Link>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// export default HamburgerMenu