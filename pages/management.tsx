import BlogCreate from '../components/blogCreate'
import BlogUpdate from '../components/blogUpdate'
import BlogDelete from '../components/blogDelete'
import {useState, useEffect} from 'react'
import { getAllBlogPosts } from "../lib/apiCalls"
import styles from "../styles/GlobalDesign.module.css"
import managmentStyles from "../styles/Management.module.css"
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Management() {
    const [operation, setOperation] = useState("")
    const [blogData, setBlogData] = useState(null)
    const router = useRouter()

    const { data: session, status } = useSession()

    useEffect( () => {
        if(!session || !session.user.isAdmin) {
            router.push({
                pathname: '/'
            })
        } else {
            getAllBlogPosts(setBlogData)
        }
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
            { session && session.user.isAdmin &&
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
            }
        </div>
    )
}

export async function getServerSideProps(ctx) {
    return {
      props: {
        session: await getSession(ctx)
      }
    }
  }