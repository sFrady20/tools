import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, SECRET } from "@/vars";
import { db } from "@/services/db";
import GitHub from "@auth/core/providers/github";
import * as schema from "@/schema";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: schema.users,
    accountsTable: schema.accounts,
    sessionsTable: schema.sessions,
    verificationTokensTable: schema.verificationTokens,
  }),
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID!,
      clientSecret: GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: SECRET,
  trustHost: true,
});
