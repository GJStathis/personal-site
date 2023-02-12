import BlogCreate from '../../components/blogCreate'
import BlogUpdate from '../../components/blogUpdate'
import BlogDelete from '../../components/blogDelete'
import {useState} from 'react'
import styles from "../../styles/GlobalDesign.module.css"
import managmentStyles from "../../styles/Management.module.css"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"

export default function Management({ blogs, session }) {
    const [operation, setOperation] = useState("")
    const [blogData, setBlogData] = useState(blogs)
    
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

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions)

    if(session === null || session.user.isAdmin === false)
    {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const response = await fetch(`${process.env.API_URL}/api/posts`)
    const data = await response.json()

    return {
      props: {
        blogs: data,
        session: session,
      }
    }
  }