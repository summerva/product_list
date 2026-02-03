import Sort from "./Sort"

const SortingForm = (props) => {
  const {
    onfilterProduct,
    sortBy = "popular",
  } = props
  return (
    <form className="list__sort">
      <Sort
        label="Сортировка:"
        filter={onfilterProduct}
        sortBy={sortBy}
      />
    </form>
  )
}

export default SortingForm