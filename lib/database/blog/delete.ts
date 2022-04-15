import { BlogModel } from '../models'

async function deleteBlog(id: string){
    return await BlogModel.findByIdAndDelete(id).exec(function(err) {
        if(err) {
            console.error(`Failed to delete id due to error: ${err}`)
            return 500
        }

        console.log("Delete successful")
        return 200
    })
}

export default deleteBlog