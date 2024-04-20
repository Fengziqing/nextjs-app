import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
//next-auth tutorial refer to: https://next-auth.js.org/configuration/initialization#route-handlers-app

//how to access google account: refer to https://next-auth.js.org/providers/google
const handler = NextAuth({
    providers: [
        //GOOGLE_CLIENT_ID!: ‘!’表明这个指一定被设定
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ]
});

export { handler as GET, handler as POST }