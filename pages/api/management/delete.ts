import { deleteBlog } from '../../../lib/database/blog'
import { simpleErrorChecking } from '../../../lib/utils'

export default async function handler(req, res) {
    const { blogID } = req.body

    console.log(`Deleting blog with ID ${blogID}`)
    const status: any = await deleteBlog(blogID)

    simpleErrorChecking(status, res)
}