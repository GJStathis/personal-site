import { update } from '../../../../../lib/database/blog'
import { connectToDB } from '../../../../../lib/database/dbConnect'
import { simpleErrorChecking } from '../../../../../lib/utils'
import multer from 'multer'
import path from 'path'

export const config = {
    api: {
      bodyParser: false,
    },
  }

export default async function handler(req, res) {
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
}