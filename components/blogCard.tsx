import styles from '../styles/BlogCard.module.css'
import { forwardRef } from 'react'

export default forwardRef( function BlogCard({ children, href, onClick}: any, ref: any) {
    return(
        <a href={href} onClick={onClick} ref={ref}>
            <div className={styles.blogCard}>
                { children }
            </div>
        </a>
    )
})