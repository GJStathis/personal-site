import styles from "../../styles/Project.module.css"
import ProjectCard from "../../components/projectCard"
import Link from 'next/link'

export default function Projects() {
    return(
        <>
            <div className={styles.centerDiv}>
                <div className={styles.projectContainer}>
                    <Link href="/projects/personal_website">
                        <ProjectCard
                            splashImagePath="/personal_website_splash_image.png"
                            imageAlt="Splash image of personal website"
                            title="My personal website"
                            description="This was a project that I started to carve out my own little section of the internet. Complete with blog and project sections!"
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}