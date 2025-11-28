import LogoutBTN from "./logoutBTN";

export default function Header() {
  return (
    <header>
      <div className="h-8 bg-lightBlue"></div>
      <nav className="bg-deepBlue flex lg:gap-96 md:gap-y-64 justify-center items-center p-4">
        <div>
          <img className="mr-32" src="/logo.svg" alt="logo" />
        </div>
        <LogoutBTN />
      </nav>
    </header>
  );
}
