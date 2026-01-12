import { sendAnswersToDB } from "../api/db.server";

export async function action({ request }) {
  const formData = await request.formData();
  const count = formData.get("questionCount");

  const answers = [];
  for (let i = 0; i < count; i++) {
    answers.push(formData.get(`q${i}`));
  }

  return sendAnswersToDB(answers);
}

export default function SendAnswers() {
  return <div>SendAnswers</div>;
}
