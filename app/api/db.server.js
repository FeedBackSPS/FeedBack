import { sql } from "./sql.js";

export function checkPSWD(inputPSWD) {
  const hashedPSWD = sql(`SELECT * from feedback_users`);

  return result;
}

export function getData() {
  const result = sql(`SELECT * from Questionnaires`);
  return result;
}
export async function sendAnswersToDB(username, answers) {
  console.log("answers in sendAnswersToDB:", { answers });
  console.log(answers[1]);

  let columns = "A1";
  for (let i = 1; i < answers.length; i++) {
    columns += `, A${i + 1}`;
  }

  let answerValues = `'${answers[0]}'`;
  for (let i = 1; i < answers.length; i++) {
    answerValues += `, '${answers[i]}'`;
  }

  const result = sql(
    `INSERT INTO Answers_1 (username, ${columns}) VALUES ('${username}', ${answerValues})`
  );

  console.log("Result to be sent to DB:", result);
  return result;
}
