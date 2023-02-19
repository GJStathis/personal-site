import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";



export const authOptions: NextAuthOptions = {
    secret: process.env.SECRET,
    providers: [
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
              return profile.email_verified && profile.email == process.env.ADMIN_GOOGLE_EMAIL_ACCOUNT
            }
            return true 
        },
        async jwt({ token, user }) {
            if(user) {
                token.isAdmin = (token.email === process.env.ADMIN_GOOGLE_EMAIL_ACCOUNT)
            }

            return token
        },
        async session({session, token}) {
            session.user.isAdmin = token.isAdmin

            return session
        }
    }
}

export default NextAuth(authOptions)