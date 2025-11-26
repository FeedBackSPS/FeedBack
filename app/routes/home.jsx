import { requireUserSession } from "../api/auth";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";

export function meta() {
  return [
    { title: "FeedBack" },
    { name: "description", content: "Welcome to FeedBack!" },
  ];
}

export async function loader({ request }) {
  await requireUserSession(request);
  return null;
}

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
