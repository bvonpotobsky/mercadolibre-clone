function Product({ description, image, price, priceMonth }) {
  return (
    <div className="Product">
      <figure className="Product__image">
        <img src={image} alt="Escritorio en forma de L" />
      </figure>
      <p className="Product__description">{description}</p>
      <h4 className="Product__price">$ {price}</h4>
      <p className="Product__price--month">{priceMonth}</p>
    </div>
  );
}

export { Product };
