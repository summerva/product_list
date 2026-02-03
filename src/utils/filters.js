export const filterProducts = (products, searchQuery) => {
  if (!searchQuery.trim()) return products;
  
  return products.filter(product => {
    const searchLower = searchQuery.toLowerCase();
    const titleMatch = product.title?.toLowerCase().includes(searchLower);
    const nameMatch = product.name?.toLowerCase().includes(searchLower);
    const descMatch = product.description?.toLowerCase().includes(searchLower);
    
    return titleMatch || nameMatch || descMatch;
  });
};

export const sortProducts = (products, sortBy) => {
  const sorted = [...products];
  
  switch (sortBy) {
    case "popular":
      return sorted.sort((a, b) => (a.id || 0) - (b.id || 0));
    case "price-asc":
      return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
    case "price-desc":
      return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
    default:
      return sorted;
  }
};