import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
    title: String,
    content: String,
    publish_date: String
})

export const BlogModel = mongoose.models.blogs || mongoose.model('blogs', BlogSchema)