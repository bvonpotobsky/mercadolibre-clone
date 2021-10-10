import logoLoctation from "../../assets/media/icons/location-outline.svg";
import iconArrowRight from "../../assets/media/icons/chevron-forward-outline.svg";

function NavUser({ name, address }) {
  return (
    <nav className="NavUser">
      <img src={logoLoctation} alt="Icono de ubicacion" />
      <p>
        Enviar a {name} - {address}
      </p>
      <img src={iconArrowRight} alt="Flecha para la derecha" />
    </nav>
  );
}

export { NavUser };
