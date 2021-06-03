import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const option = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Slack({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  database:
    'mongodb+srv://GBTest:1qaz1qaz@gbtest-denba.mongodb.net/test123?retryWrites=true&w=majority&synchronize=true',
}

export default (req, res) => NextAuth(req, res, option)
