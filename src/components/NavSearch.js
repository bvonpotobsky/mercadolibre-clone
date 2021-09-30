import logoMeLi from "../assets/media/logo/meli.png";
import search from "../assets/media/icons/search-outline.svg";
import cart from "../assets/media/icons/cart-outline.svg";

import HamburgerMenu from "react-hamburger-menu";

function NavSearch() {
  return (
    <nav className="Nav">
      <img className="Nav__logo" src={logoMeLi} alt="Logo de Mercado Libre" />

      <form className="Nav__form">
        <img src={search} alt="Icono en la barra de buscador" />
        <input type="text" placeholder="Estoy buscando..." />
      </form>

      <HamburgerMenu
        width={20}
        height={14}
        strokeWidth={1}
        rotate={0}
        color="darkslategray"
        borderRadius={0}
        animationDuration={0.5}
      />

      <img className="Nav__cart" src={cart} alt="Icono del carrito" />
    </nav>
  );
}

export { NavSearch };
