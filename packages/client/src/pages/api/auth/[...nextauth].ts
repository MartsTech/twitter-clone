import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import { SanityAdapter } from "next-auth-sanity";
import TwitterProvider from "next-auth/providers/twitter";
import { getClient } from "utils/sanity/server";

const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  // @ts-ignore
  adapter: SanityAdapter(getClient(true)),
};

export default NextAuth(options);
