import styles from '../styles/BlogCard.module.css'
import { forwardRef } from 'react'

export default forwardRef( function BlogCard({ children, href, onClick, extraStyle, title}: any, ref: any) {
    const extraCSS = extraStyle ? extraStyle : ''

    return(
        <a href={href} onClick={onClick} ref={ref}>
            <div className={styles.blogCard + ' ' + extraCSS}>
                <h2 className={styles.blogTitle}>{title}</h2>
                <div className={styles.blogCardContent}>
                    { children }
                </div>
            </div>
        </a>
    )
})