import { useState, useEffect, useCallback } from "react";
import { fetchProducts } from "../services/api";
import { filterProducts, sortProducts } from "../utils/filters";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProducts();
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    const filtered = filterProducts(products, query);
    const sorted = sortProducts(filtered, sortBy);
    setFilteredProducts(sorted);
  }, [products, sortBy]);

  const handleSort = useCallback((value) => {
    setSortBy(value);
    const filtered = filterProducts(products, searchQuery);
    const sorted = sortProducts(filtered, value);
    setFilteredProducts(sorted);
  }, [products, searchQuery]);

  const handleReset = useCallback(() => {
    setSearchQuery("");
    setSortBy("popular");
    setFilteredProducts([...products]);
  }, [products]);

  return {
    products: filteredProducts,
    isLoading,
    error,
    searchQuery,
    sortBy,
    handleSearch,
    handleSort,
    handleReset,
  };
};