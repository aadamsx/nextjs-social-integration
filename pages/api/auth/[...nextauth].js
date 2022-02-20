import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
// import InstagramProvider from "next-auth/providers/instagram";

export default NextAuth({
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID2,
      clientSecret: process.env.TWITTER_CLIENT_SECRET2,
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
    // InstagramProvider({
    //   clientId: process.env.INSTAGRAM_CLIENT_ID,
    //   clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    // }),
  ],
});
