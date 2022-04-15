import { BlogModel } from '../models'

async function update(id, title, content) {
    return await BlogModel.findByIdAndUpdate(id, {"content": content, "title": title}).exec(function(err) {
        if(err) {
            console.log(`Failed to update due to error: ${err}`)
            return 500
        } else {
            console.log("Update successful")
            return 200
        }
    })
}

export default update
