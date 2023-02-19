import { getDateFromDateime } from "../../lib/utils"
import styles from "../../styles/BlogPost.module.css"
import { Archivo } from '@next/font/google'
import { BlogPostData, BlogDBModel } from '../../lib/interfaces/global_interfaces'
import { connectToDB } from '../../lib/database/dbConnect'
import { BlogModel } from '../../lib/database/models'

const archivo = Archivo({
    weight: '200',
    subsets: ['latin']
})

const archivoWeighted = Archivo({
    weight: '400',
    subsets: ['latin']
})

const archivoBold = Archivo({
    weight: '700',
    subsets: ['latin']
})

export default function BlogPost({ data }) {

    return(
        <div className={styles.postContainer}>
            <h1 className={styles.postTitle + ' ' + archivoWeighted.className}>{data?.title}</h1>
            <hr />
            <h4 className={archivoBold.className}>Published: {getDateFromDateime(data?.publish_date)}</h4>
            <div className={styles.textContentDiv + ' ' + archivo.className}>
                {data?.content}
            </div>
        </div>
    )

}

export async function getStaticProps(context) {
    const { params } = context
    connectToDB()
    const post: BlogPostData = await BlogModel.findById(params.pid).exec()
    return {
        props: {
            data: JSON.parse(JSON.stringify(post))
        },
        revalidate: 30,
    }
}

export async function getStaticPaths() {
    connectToDB()
    const data: Array<BlogDBModel> = await BlogModel.find({}).exec()
    const blogPaths = JSON.parse(JSON.stringify(data)).map( (blog: BlogDBModel) => ({
        params: { id: blog._id, pid: blog._id}
    }))
    return {
        paths: blogPaths,
        fallback: true
    }
}