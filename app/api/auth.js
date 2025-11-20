// auth.js

import { createCookieSessionStorage, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { sql } from "./sql";
// ^^^ tvoje SQL připojení k phpMyAdmin / MySQL

// SESSION SECRET (pro školu může být natvrdo)
// TODO: v produkci použít ENV → process.env.SESSION_SECRET
const sessionSecret = "super_tajny_session_secret";

// ----- SESSION STORAGE -----
const storage = createCookieSessionStorage({
  cookie: {
    name: "session",

    // TODO: v produkci použít: process.env.NODE_ENV === "production"
    secure: false, // nyní false, protože jedete lokálně

    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

// --------------------------------------------------------------------
// ZÍSKÁNÍ SESSION Z REQUESTU
// --------------------------------------------------------------------
export async function getSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}

// --------------------------------------------------------------------
// VYŽADUJE PŘIHLÁŠENÉHO UŽIVATELE (pro protected routes)
// --------------------------------------------------------------------
export async function requireUserSession(request) {
  const session = await getSession(request);

  if (!session.has("userId")) {
    throw redirect("/login");
  }

  return session;
}

// --------------------------------------------------------------------
// VYTVOŘENÍ SESSION PO PŘIHLÁŠENÍ / REGISTRACI
// --------------------------------------------------------------------
export async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

// --------------------------------------------------------------------
// ZRUŠENÍ SESSION PŘI ODHLÁŠENÍ
// --------------------------------------------------------------------
export async function destroyUserSession(request) {
  const session = await getSession(request);

  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}

// --------------------------------------------------------------------
// VYTVOŘENÍ NOVÉHO UŽIVATELE (REGISTRACE)
// --------------------------------------------------------------------
export async function createUser(username, password) {
  // HASH HESLA
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // VLOŽENÍ UŽIVATELE DO DB
  await sql(`
    INSERT INTO users (username, password)
    VALUES ('${username}', '${hashedPassword}');
  `);

  return true;
}

// --------------------------------------------------------------------
// PŘIHLÁŠENÍ UŽIVATELE
// --------------------------------------------------------------------
export async function loginUser(username, password) {
  const result = await sql(`
    SELECT * FROM users WHERE username = '${username}' LIMIT 1;
  `);

  if (result.length === 0) {
    return null; // uživatel neexistuje
  }

  const user = result[0];

  // KONTROLA HESLA
  const isCorrect = await bcrypt.compare(password, user.password);
  if (!isCorrect) {
    return null;
  }

  return user; // úspěšné přihlášení
}
