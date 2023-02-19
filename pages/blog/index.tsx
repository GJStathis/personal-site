import BlogCard from "../../components/blogCard"
import styles from "../../styles/BlogList.module.css"
import Link from 'next/link'
import { getDateFromDateime } from "../../lib/utils"
import { connectToDB } from '../../lib/database/dbConnect'
import { BlogModel } from '../../lib/database/models'
import { BlogDBModel } from '../../lib/interfaces/global_interfaces'

export default function Blog({ posts }) {
    return(
        <div>
            <div className={styles.blogListContainer}>
                <h2>Posts</h2>
                {
                    posts.map( (post: BlogDBModel, index) => {
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
    connectToDB()
    const data: Array<BlogDBModel> = await BlogModel.find({}).exec()
    return {
        props: {
            posts: JSON.parse(JSON.stringify(data))
        },
        revalidate: 30,
    }
}

