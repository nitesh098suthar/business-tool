import NextAuth from 'next-auth'
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import GoogleProvider from 'next-auth/providers/google'
import client from '@/lib/db'



export const authOptions = {
    //  adapter: MongoDBAdapter(client),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
    pages: { signIn: '/' },
    // callbacks: {
    //     session: async ({ session, user }: { session: any; user: any }) => {
    //         session.user = user
    //         return session
    //     },
    // },
}
export const auth = NextAuth(authOptions)

// bzmr9gymlxOwBMmY
// santurajpurphit
// https://downloads.mongodb.com/compass/mongodb-compass-1.44.3-darwin-arm64.dmg