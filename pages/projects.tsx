import styles from "../styles/Project.module.css"
import BlogCard from "../components/blogCard"

export default function Projects() {
    return(
        <>
            <div className={styles.centerDiv}>
                <div className={styles.projectContainer}>
                    <BlogCard extraStyle={styles.projectCard}>
                        <h2>project 1</h2>
                        <p>This would be some details about the project</p>
                    </BlogCard>
                    <BlogCard extraStyle={styles.projectCard}>
                        <h2>project 1</h2>
                        <p>This would be some details about the project</p>
                    </BlogCard>
                    <BlogCard extraStyle={styles.projectCard}>
                        <h2>project 1</h2>
                        <p>This would be some details about the project</p>
                    </BlogCard>
                    <BlogCard extraStyle={styles.projectCard}>
                        <h2>project 1</h2>
                        <p>This would be some details about the project</p>
                    </BlogCard>
                    <BlogCard extraStyle={styles.projectCard}>
                        <h2>project 1</h2>
                        <p>This would be some details about the project</p>
                    </BlogCard>
                    <BlogCard extraStyle={styles.projectCard}>
                        <h2>project 1</h2>
                        <p>This would be some details about the project</p>
                    </BlogCard>
                    <BlogCard extraStyle={styles.projectCard}>
                        <h2>project 1</h2>
                        <p>This would be some details about the project</p>
                    </BlogCard>
                    <BlogCard extraStyle={styles.projectCard}>
                        <h2>project 1</h2>
                        <p>This would be some details about the project</p>
                    </BlogCard>
                </div>
            </div>
        </>
    )
}