import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="flex gap-10 bg-deepBlue p-5 text-sm bottom-0 absolute w-full">
      <p className="text-[#A4A4A4]">
        2025 SPŠ Trutnov. Všechna práva vyhrazena
      </p>
      <Link to={`/`}>
        <p className="text-white">Ochrana osobních údajů</p>
      </Link>
      <Link to={`/`}>
        <p className="text-white">Přístupnost</p>
      </Link>
      <nav className="flex items-center gap-4 right-0 absolute pr-5">
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
