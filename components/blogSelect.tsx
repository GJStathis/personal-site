import BlogCard from "./blogCard"

function BlogSelect(props) {
    return(
        <div>
            {props.data.map( (blog, index) => (
                <BlogCard key={index} onClick={ () => props.handler(blog)}>
                    <h3>{blog.title}</h3>
                </BlogCard>
            ))}
        </div>
    )
}

export default BlogSelect