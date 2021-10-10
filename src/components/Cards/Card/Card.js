function Card({ title, btnValue, children }) {
  return (
    <div className="Card">
      <h3 className="Card__title Product__title">{title}</h3>
      {children}
      <button className="Card__button">{btnValue}</button>
    </div>
  );
}

export { Card };
