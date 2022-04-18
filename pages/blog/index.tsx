import BlogCard from "../../components/blogCard"
import styles from "../../styles/BlogList.module.css"
import { useState, useEffect } from "react"
import Link from 'next/link'
import { getDateFromDateime } from "../../lib/utils"
import { getAllBlogPosts } from "../../lib/apiCalls"

export default function Blog() {

    const [posts, setPosts] = useState([])

    useEffect( () => {
        getAllBlogPosts(setPosts)
    }, [])

    return(
        <div>
            <div className={styles.blogListContainer}>
                <h2>Posts</h2>

                {
                    posts.map( (post, index) => {
                        return(
                            <Link href={`/blog/${post._id}`} key={index} passHref>
                                <BlogCard>
                                    <h3>{post.title}</h3>
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