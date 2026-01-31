const Field = (props) => {
  const {
    label,
    id,
    error,
    onInput,
  } = props
    return (
        <div className="list__field">
          <label
            className="field__label"
            htmlFor="search-product"
          >
            { label }
          </label>
          <input
            className="field__input"
            id="search-product"
            placeholder="Введите название"
            onInput={onInput}
          />
        </div>
    )
}

export default Field