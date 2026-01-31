const mockProducts = [
  {
    id: 1,
    title: "Смарт-часы X100",
    price: 7490,
    category: "Гаджеты",
    image: "https://vladimir.ibrat.ru/upload/iblock/97d/p5iabr9xphy9gt05pq92a6in9jijrsgm.jpg",
    description: "Водонепроницаемые, GPS, 7-дневный аккумулятор"
  },
  {
    id: 2,
    title: "Планшет 900",
    price: 490,
    category: "Гаджеты",
    image: "https://vladimir.ibrat.ru/upload/iblock/97d/p5iabr9xphy9gt05pq92a6in9jijrsgm.jpg",
    description: "Водонепроницаемые, GPS, 7-дневный аккумулятор"
  },
  {
    id: 3,
    title: "Ноутбук Honor x14",
    price: 749,
    category: "Гаджеты",
    image: "https://vladimir.ibrat.ru/upload/iblock/97d/p5iabr9xphy9gt05pq92a6in9jijrsgm.jpg",
    description: "Водонепроницаемые, GPS, 7-дневный аккумулятор"
  },
];

export const fetchProducts = () => {
  return Promise.resolve(mockProducts);
};