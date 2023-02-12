import {useState, useEffect} from 'react'
import BlogSelect from './BlogSelect'
import styles from '../styles/BlogUpdate.module.css'
import globalStyles from '../styles/GlobalDesign.module.css'

function BlogUpdate(props) {
    const [updateType, setUpdateType] = useState("file")
    const [selected, setSelected] = useState("")
    const [file, setFile] = useState("")
    const [text, setText] = useState("")
    const [title, setTitle] = useState("")

    useEffect( () => {
        setFile("")
        setTitle(selected.title)
        setText(selected.content)
    }, [selected])

    function submitFormData(e) {
        e.preventDefault()

        let url = ""
        const formData = new FormData();
        formData.append("title", title)
        formData.append("updateType", updateType)

        if(updateType == 'file') {
            url = `/api/management/update/file/${selected._id}`
            formData.append("content", file)
        } else {
            url = `/api/management/update/inline/${selected._id}`
            formData.append("content", text)
        }

        console.log(`Making call to url ${url}`)

        fetch(url, {
            method: 'post',
            credentials: 'include',
            body: formData
        }).then( response => response.json())
        .then(data => {
            if(data.statusCode == 500) {
                alert('Failed to upload')
            } else {
                alert('Upload succesful')
                window.location.reload()
            }
        })
    }

    return(
        <div className={styles.UpdateContainer}>
            <div className={styles.row}>
                <BlogSelect data={props.data} handler={setSelected}/>
            </div>
            <div className={styles.row}>
                <button className={globalStyles.buttonGeneral} onClick={ () => setUpdateType("file")}>File update</button>
                <button className={globalStyles.buttonGeneral} onClick={ () => setUpdateType("inline")}>Inline update</button>

                { selected &&
                <div>
                <p>Selected Blog: {selected.title}</p>
                    <div className={styles.formDiv}>
                        <form id='updateForm' onSubmit={submitFormData}>
                            <div className={styles.formColumnStyle}>
                                <div className={styles.inputElement}>
                                    <label htmlFor='title'>Title</label>
                                    <input type='text' name ='title' value={title} onChange={ (e) => setTitle(e.target.value)}/>
                                </div>

                                <div className={styles.inputElement}>
                                    <label htmlFor='content'>Content</label>
                                    { updateType == 'inline' && <textarea name="content" form="updateForm" value={text} cols="100" rows="50" onChange={(e) => setText(e.target.value)}/>}
                                    { updateType == 'file' && <input type='file' name='content' onChange={(e) => setFile(e.target.files[0])}/> }
                                </div>

                                <div className={styles.inputElement}>
                                    <input className={globalStyles.buttonGeneral} type='submit' value='Submit' />
                                </div>
                                
                            </div>
                        </form>
                    </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default BlogUpdate