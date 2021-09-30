import cardIcon from "../assets/media/icons/card-outline.svg";

function BannerDiscount() {
  return (
    <div className="BannerDiscount">
      <img
        className="BannerDiscount__card"
        src={cardIcon}
        alt="Icono de tarjeta de credito"
      />
      <p className="BannerDiscount__message">Hasta 6 cuotas sin interés</p>
      <p className="BannerDiscount__promo">Ver promociones bancarias</p>
    </div>
  );
}

export { BannerDiscount };
