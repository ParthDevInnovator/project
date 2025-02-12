
import { prismaClient } from "@/app/lib/db";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks:{
     async signIn(params){
      console.log(params);
      try {
        await prismaClient.user.create({
          data:{
            email:params.user?.email,
            provider:"Google"
          }
        })
      } catch (error) {
        
      }
    }
  }
});

export { handler as GET, handler as POST };
