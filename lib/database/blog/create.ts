import { BlogModel } from "../models"

function create(title, content) {
    const publish_date = new Date().toISOString()
    const blog = new BlogModel({"title": title, "content": content, "publish_date": publish_date})
    blog.save( function(err) {
        if(err) {
            console.error(err)
        } else {
            console.log("New blog created successfully")
        }
    } )
}

export default create