import { redirect, useActionData, useLoaderData } from "react-router";
import LoginForm from "../components/loginForm";
import { getSession, createUserSession, checkPassword } from "../api/auth";
import { sql } from "../api/sql";

// Loader: redirect user if already logged in
export async function loader({ request }) {
  const session = await getSession(request);
  const userId = session.get("userId");

  if (userId) {
    return redirect("/");
  }

  return null;
}

// Action: handle login POST
export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const remember = formData.get("remember");

  const isCorrect = username === "test" && password === "test"; // TEMP

  if (!isCorrect) {
    return { error: "Neplatné uživatelské jméno nebo heslo." };
  }

  let user = { username: username, id: 1 }; // TEMP

  return createUserSession(user.id, user.username, "/", remember);
}

export default function Login() {
  const actionData = useActionData();

  return <LoginForm />;
}
