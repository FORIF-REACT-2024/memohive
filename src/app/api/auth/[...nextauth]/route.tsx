import prisma from '@/lib/db'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

const authOption: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log('user')
      // console.log(user)
      // console.log(user.id)
      // console.log('acount')
      // console.log(account)
      // console.log('profile')
      // console.log(profile)
      // console.log('email')
      // console.log(email)
      // console.log('credentials')
      // console.log(credentials)
      return true
    },
  },
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST, authOption }
