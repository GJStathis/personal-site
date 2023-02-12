import { getDateFromDateime } from "../../lib/utils"
import styles from "../../styles/BlogPost.module.css"
import { Archivo } from '@next/font/google'

interface postData {
    title: string;
    content: string;
    publish_date: string
}

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
            <h1 className={styles.postTitle + ' ' + archivoWeighted.className}>{data.title}</h1>
            <hr />
            <h4 className={archivoBold.className}>Published: {getDateFromDateime(data.publish_date)}</h4>
            <div className={styles.textContentDiv + ' ' + archivo.className}>
                {data.content}
            </div>
        </div>
    )

}

export async function getStaticProps(context) {
    const { params } = context
    const data = await fetch(`${process.env.API_URL}/api/posts/${params.pid}`)
    const post: postData = await data.json()

    return {
        props: {
            data: post
        },
        revalidate: 30,
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}