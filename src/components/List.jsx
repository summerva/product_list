import { useState } from "react";
import SearchForm from "./SearchForm";
import SortingForm from "./SortingForm";
import ProductList from "./ProductList";
import Modal from "./Modal";
import { useProducts } from "../hooks/useProducts";

const List = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const {
    products,
    searchQuery,
    sortBy,
    handleSearch,
    handleSort,
    handleReset,
  } = useProducts();

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const buyButtonProduct = () => {
    const isConfirmed = confirm('Товар добавлен в корзину');
    if (isConfirmed) {
      closeModal();
    }
  };

  return (
    <div className="list">
      <h1 className="list__title">Ecom.Tech</h1>
      <SearchForm
        onSearchProduct={handleSearch}
        onResetButton={handleReset}
        searchQuery={searchQuery}
      />
      <SortingForm 
        onfilterProduct={handleSort}
        sortBy={sortBy}
      />
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