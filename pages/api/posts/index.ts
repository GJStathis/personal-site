import { connectToDB } from '../../../lib/database/dbConnect'
import { BlogModel } from '../../../lib/database/models'

export default async function handler(req, res) {
    connectToDB()

    const blogs = await BlogModel.find({}).exec()

    console.log('Got back all posts')

    res.send(blogs)
}