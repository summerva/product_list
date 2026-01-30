import { useState } from 'react';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


  return (
    <div className="list">
      <h1 className="list__title">Ecom.Tech</h1>
      <form className="list__form" action="">
        <div className="list__field field">
          <label
            className="field__label"
            htmlFor="search-product"
          >
            Поиск товара
          </label>
          <input
            className="field__input"
            id="search-product"
            placeholder="Найти товары"
          />
        </div>
        <button className="button" type="submit">Поиск</button>
      </form>
      <form className="list__sort">
        <div className="list__items">
          <label for="sort">Сортировка:</label>
          <select className="sort__input" id="sort" name="sort">
            <option value="popular">Популярные</option>
            <option value="price-asc">Сначала дешевые</option>
            <option value="price-desc">Сначала дорогие</option>
          </select>
        </div>
      </form>
      <div className="list__item" onClick={openModal}>
        <div className="item__input">
          <img src="https://vladimir.ibrat.ru/upload/iblock/97d/p5iabr9xphy9gt05pq92a6in9jijrsgm.jpg" alt="" />
          <h3>Смарт‑часы X100</h3>
          <p>7490</p>
        </div>
        <div className="item__input">
          <img src="https://vladimir.ibrat.ru/upload/iblock/97d/p5iabr9xphy9gt05pq92a6in9jijrsgm.jpg" alt="" />
          <h3>Смарт‑часы X100</h3>
          <p>7490</p>
        </div>
        <div className="item__input">
          <img src="https://vladimir.ibrat.ru/upload/iblock/97d/p5iabr9xphy9gt05pq92a6in9jijrsgm.jpg" alt="" />
          <h3>Смарт‑часы X100</h3>
          <p>7490</p>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal}>×</button>
            <img src="https://vladimir.ibrat.ru/upload/iblock/97d/p5iabr9xphy9gt05pq92a6in9jijrsgm.jpg" alt="Product" />
            <h2>Смарт‑часы X100</h2>
            <p>Цена: 7490</p>
            <p>Категория: Гаджеты</p>
            <p>Описание: Водонепроницаемые, GPS, 7‑дневный аккумулятор</p>
            <button className="button">Добавить в корзину</button>
          </div>
        </div>
      )}
      <div className="list__empty-message"></div>
    </div>
  )
}

export default App