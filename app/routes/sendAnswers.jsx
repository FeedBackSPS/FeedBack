import { redirect } from "react-router";
import { sendAnswersToDB } from "../api/db.server";
import { storage } from "../api/auth";

export async function action({ request }) {
  const formData = await request.formData();
  const count = formData.get("questionCount");
  const formID = formData.get("formID");

  const answers = [];
  for (let i = 0; i < count; i++) {
    answers.push(formData.get(`q${i}`));
    console.log(`Answer for q${i}:`, formData.get(`q${i}`));
  }

  const session = await storage.getSession(request.headers.get("Cookie"));
  const username = session.get("username");

  return (sendAnswersToDB(username, answers), redirect("/"));
}

export default function SendAnswers() {
  return <div>Sending Answers</div>;
}
