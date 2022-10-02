import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { SanityAdapter } from 'next-auth-sanity';
import { sanityClient } from "../../../sanity";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  // https://next-auth.js.org/configuration/options#session
  // You can still force a JWT session by explicitly defining `"jwt"`.
  session: {
    strategy: 'jwt'
  },
  // https://next-auth.js.org/configuration/options#secret
  // A random string is used to hash tokens, sign/encrypt cookies and generate cryptographic keys.
  secret:process.env.NEXTAUTH_SECRET,
  adapter: SanityAdapter(sanityClient)
}
export default NextAuth(authOptions)