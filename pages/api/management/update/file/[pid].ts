import { update } from '../../../../../lib/database/blog'
import { connectToDB } from '../../../../../lib/database/dbConnect'
import { simpleErrorChecking } from '../../../../../lib/utils'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../auth/[...nextauth]"

export const config = {
    api: {
      bodyParser: false,
    },
  }

const upload = multer({
    storage: multer.diskStorage({
        destination: "../../../../public/uploads",
        filename: function(req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now())
        }
    }),
    fileFilter: function(req, file, cb) {
        const ext = path.extname(file.originalname)
        if(ext != '.txt') {
            return cb(new Error("Only text files are allowed"))
        }
        cb(null, true)
    }
})

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)

    if(session && session.user.isAdmin) {
        connectToDB()

        const { pid } = req.query
        let status = null

        console.log(`Updating blog post from file`)

        upload.single('content')(req, res, async function(err) {
            if(err) {
                console.error(`ERROR: file failed to create: ${err}`)
                res.send({"status": 500, "message": "file failed to upload"})
            } else {
                console.log('Creating new blog post...')
                const fileContent = fs.readFileSync(req.file.path).toString()
                const title = req.body.title
                status = await update(pid, title, fileContent)

            }
        })

        simpleErrorChecking(status, res)
    } else {
        console.log("A call was made to the file update route and failed")
        res.send({error: "You do not have permissison to access this route"})
    }
}