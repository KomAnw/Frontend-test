export default class NewColor {
  constructor(data) {
    this.color = data.color;
    this.id = data.id;
    this.name = data.name[0].toUpperCase() + data.name.slice(1);
    this.pantoneValue = data.pantoneValue;
    this.year = data.year;
    this.row = null;
  }
  template() {
    const markup = `
		<div class="colors-table__data">
            <p class="colors-table__text colors-table__id id"></p>
            <p class="colors-table__text colors-table__name name"></p>
            <p class="colors-table__text colors-table__year year"></p>
            <div class="colors-table__text colors-table__container color">
                <img src="" alt="" class="colors-table__img">
                <p class="colors-table__value"></p>
            </div>
            <p class="colors-table__text colors-table__pantone-value pantone"></p>
        </div>`;
    const elem = document.createElement("div");
    elem.insertAdjacentHTML("beforeend", markup.trim());
    return elem.firstChild;
  }

  create = () => {
    this.row = this.template();
    this.row.querySelector(".colors-table__id").textContent = this.id;
    this.row.querySelector(".colors-table__name").textContent = this.name;
    this.row.querySelector(".colors-table__year").textContent = this.year;
    this.row.querySelector(".colors-table__value").textContent = this.color;
    this.row.querySelector('.colors-table__img').style.background = this.color;
    this.row.querySelector(".colors-table__pantone-value").textContent = this.pantoneValue;
    return this.row;
  };
}
