import styles from "../../styles/Project.module.css"
import Image from "next/image"

export default function Projects() {
    return(
        <>
            <div className={styles.centerDiv}>
                <div className={styles.projectContainer}>
                    <Image src="/meme.jpg" width="500" height="500"/>
                </div>
            </div>
        </>
    )
}