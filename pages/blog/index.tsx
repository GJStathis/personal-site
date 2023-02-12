import BlogCard from "../../components/blogCard"
import styles from "../../styles/BlogList.module.css"
import Link from 'next/link'
import { getDateFromDateime } from "../../lib/utils"

export default function Blog({ posts }) {
    return(
        <div>
            <div className={styles.blogListContainer}>
                <h2>Posts</h2>
                {
                    posts.map( (post, index) => {
                        return(
                            <Link href={`/blog/${post._id}`} key={index} passHref legacyBehavior>
                                <BlogCard title={post.title}>
                                    <p>Published: {getDateFromDateime(post.publish_date)}</p>
                                </BlogCard>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch(`${process.env.API_URL}/api/posts`)
    const data = await response.json()

    return {
        props: {
            posts: data
        },
        revalidate: 30,
    }
}

