import BlogCreate from '../components/blogCreate'
import BlogUpdate from '../components/blogUpdate'
import BlogDelete from '../components/blogDelete'
import {useState, useEffect} from 'react'
import { getAllBlogPosts } from "../lib/utils"
import styles from "../styles/GlobalDesign.module.css"
import managmentStyles from "../styles/Management.module.css"

function Management() {
    const [operation, setOperation] = useState("")
    const [blogData, setBlogData] = useState(null)

    useEffect( () => {
        getAllBlogPosts(setBlogData)
    }, [])
    
    function removeObjectFromData(objectId) {
        const buf = blogData.filter(function hasObjId(obj) {
            if(obj._id == objectId) {
                return false
            }
            return true
        })
        setBlogData(buf)
    }

    return(
        <div className={managmentStyles.managementContainer}>
            <div>
                <div className={managmentStyles.commandContainer}>
                    <button className={styles.buttonGeneral} onClick={() => setOperation('create')}>Create</button>
                    <button className={styles.buttonGeneral} onClick={() => setOperation('update')}>Update</button>
                    <button className={styles.buttonGeneral} onClick={() => setOperation('delete')}>Delete</button>
                </div>

                { operation == "create" && <BlogCreate /> }
                { operation == "update" && blogData && <BlogUpdate data={blogData} />}
                { operation == "delete" && blogData && <BlogDelete data={blogData} clientDelete={removeObjectFromData} />}
            </div>

        </div>
    )
}

export default Management