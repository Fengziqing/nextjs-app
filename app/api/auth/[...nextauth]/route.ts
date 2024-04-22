import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
//next-auth tutorial refer to: https://next-auth.js.org/configuration/initialization#route-handlers-app
//how to access google account: refer to https://next-auth.js.org/providers/google
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        //使用自定义email和password进行登录
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'Email' },
                password:{label:'Password', type: 'password', placeholder:'Password'}
            },
            async authorize(credentials, req) {
                if(!credentials?.email||!credentials.password) return null
                
                const user = await prisma.user.findUnique({
                    where:{email:credentials.email}
                });

                if(!user) return null;
                
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword!)
                return passwordMatch ? user:null;
            },
        }),
        //使用google account进行登录
        //GOOGLE_CLIENT_ID!: ‘!’表明这个值一定有
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    session: {
        strategy: 'jwt'
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }