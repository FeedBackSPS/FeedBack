import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";

export function meta() {
  return [
    { title: "FeedBack" },
    { name: "description", content: "Welcome to FeedBack!" },
  ];
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
