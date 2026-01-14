import { redirect } from "react-router";
import { sendAnswersToDB } from "../api/db.server";

export async function action({ request }) {
  const formData = await request.formData();
  const count = formData.get("questionCount");
  const formID = formData.get("formID");

  const answers = [];
  for (let i = 0; i < count; i++) {
    answers.push(formData.get(`q${i}`));
    console.log(`Answer for q${i}:`, formData.get(`q${i}`));
  }

  return (sendAnswersToDB(answers, formID), redirect("/"));
}

export default function SendAnswers() {
  return <div>Sending Answers</div>;
}
