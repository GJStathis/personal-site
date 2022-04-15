import mongoose from "mongoose";

async function connectToDB() {
    console.log('Connection to DB...')
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
        dbName: 'blog'
    })
    console.log('Connection successful!')
}

const connection = mongoose.connection

export { connectToDB, connection }