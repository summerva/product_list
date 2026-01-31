import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import SortingForm from "./SortingForm";
import ProductList from "./ProductList";
import Modal from "./Modal";
import { fetchProducts } from "../services/api";

const List = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const searchProduct = (query) => {
    console.log(`Поиск: ${query}`)
  }

  const filterProduct = (value) => {
    console.log(`Фильтрация товаров ${value}`)
  }

  const resetButton = () => {
    console.log(`Кнопка сброс`)
  }

  const buyButtonProduct = () => {
    console.log(`Кнопка купить modal`)
  }

  return (
    <div className="list">
      <h1 className="list__title">Ecom.Tech</h1>
      <SearchForm
        onSearchProduct={searchProduct}
        onResetButton={resetButton}
      />
      <SortingForm onfilterProduct={ filterProduct } />
      <ProductList
        products={products}
        onClick={openModal}
      />
      {isModalOpen && selectedProduct && (
        <Modal
          onClose={closeModal}
          product={selectedProduct}
          onBuyButton={buyButtonProduct}
        />
      )}
    </div>
  );
};

export default List;
