import ProductCard from "./ProductCard";

const ProductList = (props) => {
  const {
    products,
    onClick,
    isEmptyList = false,
  } = props;

  if (!products) return null;

  if (isEmptyList) {
    return (
      <div className="list__empty-message">
        Товара с таким названием не существует
      </div>
    );
  }

  return (
    <div className="list__item">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onClick(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
