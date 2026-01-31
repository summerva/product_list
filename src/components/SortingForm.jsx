import Sort from "./Sort"

const SortingForm = (props) => {
  const {
    onfilterProduct,
  } = props
  return (
    <form className="list__sort">
      <Sort
        label="Сортировка:"
        filter={onfilterProduct}
      />
    </form>
  )
}

export default SortingForm