import { create } from '../../../lib/database/blog'
import { connectToDB } from '../../../lib/database/dbConnect'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

export const config = {
    api: {
      bodyParser: false,
    },
  }

const upload = multer({
    storage: multer.diskStorage({
        destination: "../../../public/uploads",
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

export default function handler(req, res) {
    connectToDB()

    console.log('Creating new blog post')

    upload.single('content')(req, res, function(err) {
        if(err) {
            console.error(`ERROR: file failed to create: ${err}`)
            res.send({"status": 500, "message": "file failed to upload"})
        } else {
            console.log('Creating new blog post...')
            const fileContent = fs.readFileSync(req.file.path).toString()
            const title = req.body.title
            create(title, fileContent)
        }
    })

    res.status(200).send({})
}