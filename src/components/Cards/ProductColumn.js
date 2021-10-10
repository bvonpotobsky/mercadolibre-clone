function ProductColumn({ description, image, price, priceMonth, delivery }) {
  return (
    <div className="ProductColumn">
      <figure className="ProductColumn__image">
        <img src={image} alt="Escritorio en forma de L" />
      </figure>
      <div>
        <p className="ProductColumn__description">{description}</p>
        <h4 className="ProductColumn__price">$ {price}</h4>
        <p className="ProductColumn__price--month">{priceMonth}</p>
        <p className="ProductColumn__delivery">{delivery}</p>
      </div>
    </div>
  );
}

export { ProductColumn };
