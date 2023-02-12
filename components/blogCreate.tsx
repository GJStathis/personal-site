import {useState, useRef} from 'react'
import styles from '../styles/BlogCreate.module.css'
import globalStyles from '../styles/GlobalDesign.module.css'

function BlogCreate() {
    const [title, setTitle] = useState("")
    const [file, setFile] = useState("")

    const fileRef = useRef()
    const url = "/api/management/create"

    const submitForm = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("title", title)
        formData.append("content", file)

        fetch(url, {
            method: 'post',
            credentials: 'include',
            body: formData
        })
        .then(res => {res.json()})
        .then(data => {
            setTitle("")
            setFile(null)
            fileRef.current.value = ""
            window.location.reload()
        })
        .catch(err => {
            e.preventDefault()
            console.log(err)
        })

    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <div className={styles.blogCreateContainer}>
                    <div className={styles.blogCreateInput}>
                        <label htmlFor='title'>Title</label>
                        <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>

                    <div className={styles.blogCreateInput}>
                        <label htmlFor='content'>Blog content</label>
                        <input type='file' name='content' ref={fileRef} onChange={(e) => setFile(e.target.files[0])}/>
                    </div>

                    <input  className={globalStyles.buttonGeneral} type='submit' value='Submit' />
                </div>
            </form>
        </div>
    )
}

export default BlogCreate