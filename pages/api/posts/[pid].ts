import { connectToDB } from '../../../lib/database/dbConnect'
import { BlogModel } from '../../../lib/database/models'

export default async function handler(req, res) {
    connectToDB()

    const { pid } = req.query

    console.log(`Getting post with ID ${pid}`)
    const post = await BlogModel.findById(pid).exec()

    res.send(post)
}