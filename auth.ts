import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/prisma/client';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

// Schema for registration validation
const userSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(6),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          select: {
            id: true,
            email: true,
            name: true,
            password: true,
            role: true,
            unumber: true,
            function: true,
            location: true,
            image: true
          }
        });

        if (!user || !user.password) return null;
        
        const passwordsMatch = await bcrypt.compare(credentials.password, user.password);
        
        if (!passwordsMatch) return null;
        
        return user;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
        token.unumber = user.unumber;
        token.function = user.function;
        token.location = user.location;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.id = token.id;
        session.user.unumber = token.unumber;
        session.user.function = token.function;
        session.user.location = token.location;
      }
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
    newUser: '/auth/register',
    verifyRequest: '/auth/verify',
    error: '/auth/error',
  },
  events: {
    signOut: () => {
      return { url: '/' }
    }
  }
});
