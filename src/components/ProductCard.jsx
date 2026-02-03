const ProductCard = (props) => {
  const {
    product,
    onClick
  } = props;

  if (!product) return null;

  return (
    <div className="item__input" onClick={onClick}>
      <img src={product.image} alt={product.title || product.name} />
      <h3>{product.title || product.name}</h3>
      <p>{`${product.price}₽`}</p>
    </div>
  );
};

export default ProductCard;