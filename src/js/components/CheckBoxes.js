export default class CheckBoxes {
  constructor(reset, buttons, columns) {
    this.reset = reset;

    this.columns = columns;
    this.id = columns.id;
    this.name = columns.name;
    this.year = columns.year;
    this.color = columns.color;
    this.pantone = columns.pantone;

    this.buttons = buttons;
  }

  removeHandler = (event) => {
    switch (event.target.className) {
      case "colors__checkbox colors__id":
        this.removeAllElems(this.id, event.target.parentNode.parentNode);
        this.removeEventListeners(event.target);
        break;
      case "colors__checkbox colors__name":
        this.removeAllElems(this.name, event.target.parentNode.parentNode);
        this.removeEventListeners(event.target);
        break;
      case "colors__checkbox colors__year":
        this.removeAllElems(this.year, event.target.parentNode.parentNode);
        this.removeEventListeners(event.target);
        break;
      case "colors__checkbox colors__color":
        this.removeAllElems(this.color, event.target.parentNode.parentNode);
        this.removeEventListeners(event.target);
        break;
      case "colors__checkbox colors__pantone-value":
        this.removeAllElems(this.pantone, event.target.parentNode.parentNode);
        this.removeEventListeners(event.target);
        break;
    }

    if (this.resetHandler) {
      this.reset.classList.add("header__reset_active");
      this.listenerOnButton();
    }
  };

  removeAllElems = (elems, input) => {
    elems.forEach((item) => (item.style.display = "none"));
    input.style.display = "none";
  };

  resetHandler = () => {
    this.buttons.every((el) => {
      el.checked;
      return false;
    });
  };

  resetAllFields = () => {
    this.buttons.forEach((item) => {
      item.parentNode.parentNode.style.display = "block";
      item.checked = true;
    });
    Object.values(this.columns).forEach((item) => {
      item.forEach((el) => (el.style.display = "flex"));
    });
    this.removelistenerOnButton();
    this.reset.classList.remove("header__reset_active");
  };

  listenerOnButton = () => {
    this.reset.addEventListener("click", this.resetAllFields);
  };

  addEventListeners() {
    this.buttons.forEach((item) =>
      item.addEventListener("change", this.removeHandler)
    );
  }

  removeEventListeners(element) {
    element.removeEventListener("change", this.removeHandler);
  }

  removelistenerOnButton = () => {
    this.reset.removeEventListener("click", this.resetAllFields);
    this.addEventListeners();
  };
}
