import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import DiscordProvider from "next-auth/providers/discord"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUBID,
      clientSecret: process.env.GITHUBSECRET,
    }),
    DiscordProvider({
      clientId: process.env.DISCORDID,
      clientSecret: process.env.DISCORDSECRET,
    })
  ], 
  secret: "mfRRZXfR7M8lIIK3q0Dze5/87V3637aQ6tNTOA==NRjpAhRj33T0pQHO29ruxyT0",
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },

  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
    generateSessionToken: () => {
        return randomUUID?.() ?? randomBytes(32).toString("hex")
    }, 
  },
}

export default NextAuth(authOptions)