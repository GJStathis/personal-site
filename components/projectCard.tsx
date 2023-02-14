import styles from "../styles/ProjectCard.module.css"
import Image from 'next/image'

export default function ProjectCard(props)
{
    return(
        <div className={styles.cardContainer}>
            <div>
                <Image 
                    src={props.splashImagePath} 
                    alt={props.imageAlt}
                    width={200}
                    height={150}
                />
                
            </div>
            <div>
                <h2>{props.title}</h2>
                <hr/>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )

}