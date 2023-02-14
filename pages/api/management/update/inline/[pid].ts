import { update } from '../../../../../lib/database/blog'
import { connectToDB } from '../../../../../lib/database/dbConnect'
import { simpleErrorChecking } from '../../../../../lib/utils'
import multer from 'multer'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../auth/[...nextauth]"

export const config = {
    api: {
      bodyParser: false,
    },
  }

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    
    if(session && session.user.isAdmin) {
        connectToDB()

        const { pid } = req.query
        let status = null

        console.log(`Updating blog post from inline text box`)

        multer().none()(req, res, async function(err){
            if(err) {
                console.log(`ERROR: ${err}`)
                res.send({"status": 500, "message": err.message})
            } else {
                const fileContent = req.body.content
                const title = req.body.title

                console.log(`Updating blog via inline text with id ${pid}`)
                
                status = await update(pid, title, fileContent)
            }
        })
        
        simpleErrorChecking(status, res)
    } else {
        console.log("A call was made to the inline update route and failed")
        res.send({error: "You do not have permissison to access this route"})
    }
}