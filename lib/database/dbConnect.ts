import mongoose from "mongoose";

async function connectToDB() {
    console.log('Connecting to DB...')

    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            user: process.env.MONGO_USER,
            pass: process.env.MONGO_PASSWORD,
            dbName: 'blog',
            authSource: 'blog'
        })

        console.log('Connection successful!')
    } catch(err) {
        console.log(`An error has happend while connecting ${err}`)
    }
}

const connection = mongoose.connection

export { connectToDB, connection }