import { deleteBlog } from '../../../lib/database/blog'
import { simpleErrorChecking } from '../../../lib/utils'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)

    if(session && session.user.isAdmin) {

        const { blogID } = req.body

        console.log(`Deleting blog with ID ${blogID}`)
        const status: any = await deleteBlog(blogID)

        simpleErrorChecking(status, res)
    } else {
        res.send({error: "You do not have permissison to access this route"})
    }
}