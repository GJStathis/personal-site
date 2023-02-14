import styles from "../styles/PostContainer.module.css"
import { Archivo } from '@next/font/google'

const archivo = Archivo({
    weight: '200',
    subsets: ['latin']
})

const archivoWeighted = Archivo({
    weight: '400',
    subsets: ['latin']
})

export default function PostContainer(props) {
    return(
        <div className={`${styles.container} ${archivo.className}`}>
            <h1 className={`${archivoWeighted.className} ${styles.postTitle}`}>{props.title}</h1>
            <hr />
            {props.children}
        </div>
    )

}