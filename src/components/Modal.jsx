import Button from "./Button";

const Modal = (props) => {
  const {
    product,
    onClose,
    onBuyButton,
  } = props

  if (!product) return null;
  
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>×</button>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{`Цена: ${product.price}₽` }</p>
        <p>Категория: {product.category}</p>
        <p>Описание: {product.description}</p>
        <Button
          type="submit"
          onClick={onBuyButton}
        >
        Купить
        </Button> 
      </div>
    </div>
  );
};

export default Modal;
