const Field = (props) => {
  const {
    label,
    value,
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
            value={value || ""}
          />
        </div>
    )
}

export default Field