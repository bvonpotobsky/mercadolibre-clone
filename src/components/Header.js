import { NavSearch } from "./NavSearch";

function Header({ name, address }) {
  return (
    <header className="Header">
      <NavSearch />
      <nav className="NavData"></nav>
    </header>
  );
}

export { Header };
