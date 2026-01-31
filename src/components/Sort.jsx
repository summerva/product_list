const Sort = (props) => {
    const {
      label,
      filter,
    } = props
    return (
    <div className="list__items">
    <p>{ label }</p>
      <select className="sort__input" id="sort" name="sort">
        <option value="popular">Популярные</option>
        <option value="price-asc">Сначала дешевые</option>
        <option value="price-desc">Сначала дорогие</option>
      </select>
    </div>
    )
}

export default Sort
