import Field from "./Field";
import Button from "./Button/";

const SearchForm = (props) => {
  const {
    onSearchProduct,
    onResetButton,
    searchQuery="",
  } = props

  const hadleReset = () => {
    onResetButton()
  }

  return (
    <form className="list__form"
      onReset={(event) => event.preventDefault()}
    >
      <Field
        label="Поиск товара"
        onInput={(event) => onSearchProduct(event.target.value)}
        value={searchQuery}
      />
      <Button
        type="reset"
        onClick={hadleReset}
      >
        Сброс</Button>
    </form>
  );
};

export default SearchForm;
