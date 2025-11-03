import { sql } from "./sql";
import bcrypt from "bcryptjs";
import { createCookieSessionStorage, redirect } from "@remix-run/node";

const sessionSecret = "default_secret";
export const storage = createCookieSessionStorage({
  cookie: {
    name: "user_session",
    secrets: ["něco_tajného"],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});
export async function getSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
export async function getCurrentUser(request) {
  const session = await getSession(request);
  const userId = session.get("userId");

  if (!userId) {
    return null; // Uživatel není přihlášen
  }

  // Načtení uživatele z databáze podle userId
  const result = await sql(
    `SELECT username, email FROM social_user WHERE id = '${userId}';`
  );

  return result[0] || null; // Vrací uživatele nebo null, pokud neexistuje
}
export async function createUserSession(username, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", username);
  session.set("username", username); // Uložení username do session
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}
