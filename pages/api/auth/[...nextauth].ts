import NextAuth from "next-auth/next";
import { UserModel } from "../../../lib/database/models/index";
import { checkIfPasswordsMatch } from "../../../lib/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from '../../../lib/database/dbConnect'

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                connectToDB()
                const user = await UserModel.findOne({username: credentials.username})

                if(!user) {
                    console.error(`The user ${credentials.username} does not exist`)
                    return null
                }

                if(!checkIfPasswordsMatch(credentials.password, user.password)) {
                    console.error(`Incorrect password`)
                    return null
                }

                console.log(`Successful sign in as user ${user.username}`)

                return user
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if(user) {
                return {
                    ...token,
                    username: user.username,
                    isAdmin: user.isAdmin
                }
            }

            return token
        },

        async session({session, token}) {
            session.user.username = token.username
            session.user.isAdmin = token.isAdmin

            return session
        }
    }
})