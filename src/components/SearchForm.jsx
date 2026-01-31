import Field from "./Field";
import Button from "./Button/";

const SearchForm = (props) => {
  const {
    onSearchProduct,
    onResetButton,
  } = props
  return (
    <form className="list__form"
      onReset={(event) => event.preventDefault()}
    >
      <Field
        label="Поиск товара"
        onInput={(event) => onSearchProduct(event.target.value)}
      />
      <Button
        type="reset"
        onClick={onResetButton}
      >
        Сброс</Button>
    </form>
  );
};

export default SearchForm;
