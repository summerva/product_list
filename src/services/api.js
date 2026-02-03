const mockProducts = [
  {
    id: 1,
    title: "Смарт-часы HUAWEI Watch Fit 4 Black",
    price: 10999,
    category: "Гаджеты",
    image: "https://img.mvideo.ru/Big/400454546bb1.jpg",
    description: "Смарт-часы Huawei Watch Fit 4 Black выполнены в корпусе из алюминиевого сплава"
  },
  {
    id: 2,
    title: "Смартфон Apple iPhone 17 Pro",
    price: 129990,
    category: "Гаджеты",
    image: "https://img.mvideo.ru/Big/30087039bb.jpg",
    description: "Смартфон AppleApple iPhone 17 Pro 256GB Silver (без RuStore) — смартфон с 6,3-дюймовым экраном и обновленным дизайном блока основных камер"
  },
  {
    id: 3,
    title: "Телевизор Hisense 40A5Q",
    price: 24990,
    category: "Гаджеты",
    image: "https://img.mvideo.ru/Big/400457649bb.jpg",
    description: "Телевизор Hisense 40A5Q RU с Full HD экраном диагональю 40 дюймов работает под управлением видеопроцессора NT72690"
  },
  {
    id: 4,
    title: "Ноутбук Apple MacBook Air 13",
    price: 89990,
    category: "Гаджеты",
    image: "https://img.mvideo.ru/Big/30079743bb.jpg",
    description: "Модель 2025 года с искусственным интеллектом Apple Intelligence, упрощающим управление системой, взаимодействие с помощником Siri, обработку текста и изображений"
  },
  {
    id: 5,
    title: "Умная колонка Яндекс Станция Мини",
    price: 6700,
    category: "Гаджеты",
    image: "https://img.mvideo.ru/Big/10029476bb.jpg",
    description: "Умная колонка «Яндекс Станция Мини с Алисой», с часами, черный опал — обновленная версия умной колонки с голосовым помощником. Модель получила громкий звук мощностью 10 Вт."
  },
  {
    id: 6,
    title: "Наушники Apple AirPods Pro 2 MagSafe",
    price: 22990,
    category: "Гаджеты",
    image: "https://img.mvideo.ru/Big/50176080bb3.jpg",
    description: "Модель типа вкладыши в корпус из пластика, амбушюры сделаны из силикона"
  },
];

export const fetchProducts = () => {
  return Promise.resolve(mockProducts);
};