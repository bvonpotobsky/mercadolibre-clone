import { NavSearch } from "./NavSearch";
import { NavUser } from "./NavUser";

function Header() {
  return (
    <header className="Header">
      <NavSearch />
      <NavUser name="Adriana" address="Catamarca 1238" />
    </header>
  );
}

export { Header };
