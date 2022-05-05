import NextAuth from "next-auth/next";
import { UserModel } from "../../../lib/database/models/index";
import { checkIfPasswordsMatch } from "../../../lib/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from '../../../lib/database/dbConnect'

export default NextAuth({
    providers: [
        // CredentialsProvider({
        //     name: 'Credentials',
        //     credentials: {
        //         username: { label: "Username", type: "text", placeholder: "jsmith" },
        //         password: {  label: "Password", type: "password" }
        //     },
        //     async authorize(credentials, req) {
        //         connectToDB()
        //         const user = await UserModel.findOne({username: credentials.username})

        //         if(!user) {
        //             console.error(`The user ${credentials.username} does not exist`)
        //             return null
        //         }

        //         if(!checkIfPasswordsMatch(credentials.password, user.password)) {
        //             console.error(`Incorrect password`)
        //             return null
        //         }

        //         console.log(`Successful sign in as user ${user.username}`)

        //         return user
        //     }
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
            }
        })

    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
              return profile.email_verified && profile.email == "gstathis22@gmail.com"
            }
            return true 
        },
        async jwt({ token, user }) {
            console.log(JSON.stringify(user))
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
            session.user.username = "gstathis"
            session.user.isAdmin = token.isAdmin || token.email === "gstathis22@gmail.com"

            return session
        }
    }
})