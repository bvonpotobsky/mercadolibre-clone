import desktopImg from "../assets/media/products/desktop-l.webp";

function RecentlyViewed({ title, description, price, btnValue }) {
  return (
    <div className="Card-md">
      <h3 className="Card-md__title">{title}</h3>
      <figure>
        <img src={desktopImg} alt="Escritorio en forma de L" />
      </figure>
      <p className="Card-md__description">{description}</p>
      <h4 className="Card-md__price">$ {price}</h4>
      <p className="Card-md__price--month">6x $ 3.942 sin interés</p>
      <button className="Card-md__button">{btnValue}</button>
    </div>
  );
}

export { RecentlyViewed };
