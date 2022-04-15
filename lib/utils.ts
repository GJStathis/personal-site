function getDateFromDateime(datetime: string) {
    let dateVal = new Date(datetime)
    const date = `0${dateVal.getDate()}`.slice(-2)
    const month = `0${dateVal.getMonth()}`.slice(-2)
    return `${month}-${date}-${dateVal.getFullYear()}`
}

async function getAllBlogPosts(setPostsHandler: (data: object) => void) {
    const response = await fetch('/api/posts')
    const data = await response.json()
    setPostsHandler(data)
}

function simpleErrorChecking(status, res) {
    if(status === 500) {
        res.send({"status": 500, "message": "blog failed to delete"})
    } else {
        res.status(200).send({"message": "blog successfully deleted"})
    }
}

export { getDateFromDateime, getAllBlogPosts, simpleErrorChecking }