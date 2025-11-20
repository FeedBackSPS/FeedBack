import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full flex gap-10 bg-deepBlue text-sky-100 justify-center items-center p-6">
      <p className="fixed left-12 items-start text-gray-400">2025 SPŠ Trutnov. Všechna práva vyhrazena</p>
      <Link to={`/`}>
        <p className="items-center justify-center ml-96 pl-96">Ochrana osobních údajů</p>
      </Link>
      <Link to={`/`}>
        <p>Přístupnost</p>
      </Link>
      <nav className="flex gap-2 fixed right-12 justify-center items-center">
        <Link to={`https://www.facebook.com`}>
          <img src="/facebook.png" alt="facebook" />
        </Link>
        <Link to={`https://www.youtube.com`}>
          <img src="/youtube.png" alt="youtube" />
        </Link>
        <Link to={`https://www.instagram.com`}>
          <img src="/instagram.png" alt="instagram" />
        </Link>
      </nav>
    </footer>
  );
}
