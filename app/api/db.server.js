import { sql } from "./sql.js";

export function checkPSWD(inputPSWD) {
  const hashedPSWD = sql(`SELECT * from feedback_users`);

  return result;
}

export function getData() {
  const result = sql(`SELECT * from Questionnaires`);
  return result;
}
