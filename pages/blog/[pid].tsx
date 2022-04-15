import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import { getDateFromDateime } from "../../lib/utils"
import styles from "../../styles/BlogPost.module.css"

interface postData {
    title: string;
    content: string;
    publish_date: string
}

export default function BlogPost() {

    const [postData, setPostData] = useState<postData>({ title: '', content: '', publish_date: ''})

    const router = useRouter()
    

    const getPostData = async(pid) => {
        console.log(`Got in a pid of ${pid}`)
        const data = await fetch(`/api/posts/${pid}`)
        const jsonData: postData = await data.json()
        setPostData(jsonData)
    }

    useEffect( () => {
        if(!router.isReady) return;

        const { pid } = router.query
        getPostData(pid)

        console.log(postData)

    }, [router.isReady])

    return(
        <div className={styles.postContainer}>
            <h2 className={styles.postTitle}>{postData.title}</h2>
            <h4>Published: {getDateFromDateime(postData.publish_date)}</h4>
            <p>{postData.content}</p>
        </div>
    )

}