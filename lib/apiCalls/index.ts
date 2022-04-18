async function getAllBlogPosts(setPostsHandler: (data: object) => void) {
    const response = await fetch('/api/posts')
    const data = await response.json()
    setPostsHandler(data)
}

export { getAllBlogPosts }