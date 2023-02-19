export interface BlogPostData {
    title: string;
    content: string;
    publish_date: string
}

export interface BlogDBModel {
    _id: string;
    title: string;
    content: string;
    publish_date: string;
    _v: string;
}
