import * as dotenv from "dotenv"
import * as path from 'path'

dotenv.config({
    path: path.join(__dirname, '../.env.local')
})

import { UserModel } from "./user"
import { connectToDB } from "./dbConnect"


const username = process.env.ADMIN_USERNAME
const password = process.env.ADMIN_PASSWORD

connectToDB()

const adminUser = new UserModel({username: username, password: password, isAdmin: true})

adminUser.save(function(err) {
    if(err) {
        throw `Error: ${err}`
    }

    console.log("admin user created!")
})