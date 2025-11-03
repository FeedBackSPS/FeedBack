import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="flex gap-10">
      <p>2025 SPŠ Trutnov. Všechna práva vyhrazena</p>
      <Link to={`/`}>
        <p>Ochrana osobních údajů</p>
      </Link>
      <Link to={`/`}>
        <p>Přístupnost</p>
      </Link>
      <nav className="flex">
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
