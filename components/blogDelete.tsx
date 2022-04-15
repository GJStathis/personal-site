import {useState} from 'react'
import BlogSelect from './BlogSelect'
import styles from '../styles/BlogUpdate.module.css'
import globalStyles from '../styles/GlobalDesign.module.css'

function BlogDelete(props) {
    const [selected, setSelected] = useState({})

    function deleteSelected() {
        console.log(`Deleting the following object ${selected._id}`)

        // Make a call to the api to delete the id
        if(selected) {
            let url = `api/management/delete`
            const headers = new Headers()
            headers.append('Content-Type', 'application/json')


            fetch(url, {
                credentials: 'include',
                method: 'DELETE',
                headers: headers,
                body: JSON.stringify({"blogID": selected._id})
            })

            props.clientDelete(selected._id)
        } else {
            alert("Please select a post to delete")
        }

        setSelected({})
    }

    return(
        <div className={styles.UpdateContainer}>
            <div className={styles.row}>
                <BlogSelect data={props.data} handler={setSelected}/>
            </div>
            <div className={styles.row}>
                <p>Selected Blog: {selected.title}</p>
                <button className={globalStyles.buttonGeneral} onClick={() => deleteSelected()}>Delete</button>
            </div>
        </div>
    )
}

export default BlogDelete