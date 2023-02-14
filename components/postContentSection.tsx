import styles from "../styles/PostContentSection.module.css"

export default function PostContentSection(props) {
    return (
        <div className={styles.contentContainer}>
            <h2>{props.title}</h2>
            <hr className={styles.shortbreak}/>
            <br/>
            <div>
                {props.children}
            </div>
        </div>
    )
}