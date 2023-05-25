import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
/*
    Note: No secret provided since it's provided in .env.local
    read more: https://next-auth.js.org/configuration/options#secret

*/
const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "295273889712-59kl12fvpeaf4ke0ht0b2eorvaf9j1nn.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  session: {
    maxAge: 60 * 60, // 1 hour
  },
});
export { handler as GET, handler as POST };
