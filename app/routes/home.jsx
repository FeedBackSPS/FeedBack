import { useLoaderData } from "react-router";
import { requireUserSession } from "../api/auth";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import { getData } from "../api/db.server";

export function meta() {
  return [
    { title: "FeedBack" },
    { name: "description", content: "Welcome to FeedBack!" },
  ];
}

export async function loader({ request }) {
  // let data = 1;

  let data = getData();
  await requireUserSession(request);
  return data;
}

export default function Home() {
  let data = useLoaderData();
  console.log(data, "data v home");
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <div></div>
      <Header />
      <Main questionnaires={data} />
      <Footer />
    </div>
  );
}
