import Header from "../components/header";
import LoginForm from "../components/loginForm";

export function meta() {
  return [
    { title: "FeedBack" },
    { name: "description", content: "Welcome to FeedBack!" },
  ];
}

export default function Home() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
