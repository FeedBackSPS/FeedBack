import { sql } from "./sql";

export async function getStoredHashedPassword(username) {
  const result = await sql`
    SELECT password FROM users WHERE username = ${username};
  `;

  if (result.length === 0) {
    throw new Error("User not found");
  }

  return result[0].password; // Assuming password is stored as a hash
}
