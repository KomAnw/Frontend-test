import "../vendor/normalize.css";
import "../styles/index.css";
import Api from "./modules/Api";
import ColorsList from "./components/ColorsList";
import NewColor from "./components/NewColor";
import CheckBoxes from "./components/CheckBoxes";

const URL = "https://reqres.in/api/unknown?per_page=12";
const list = document.querySelector(".colors-table");
const resetButton = document.querySelector('.header__reset')
const arr = [];

const api = new Api(URL);
api.getData().then((data) => createNewColor(data));

function createNewColor(data) {
  data.data.forEach((item) => {
    const newColor = {
      color: item.color,
      id: item.id,
      name: item.name,
      pantoneValue: item.pantone_value,
      year: item.year,
    };
    const card = new NewColor(newColor);
    const cardsNode = card.create();
    arr.push(cardsNode);
  });
  renderList();
}

function renderList() {
  const colorsList = new ColorsList(list);
  colorsList.render(arr);
  checkState();
}

function checkState() {
  const buttonsArr = [];
  //кнопки
  const chId = document.querySelector(".colors__id");
  const chName = document.querySelector(".colors__name");
  const chYear = document.querySelector(".colors__year");
  const chColor = document.querySelector(".colors__color");
  const chPval = document.querySelector(".colors__pantone-value");
  //колонки
  const id = document.querySelectorAll(".id");
  const name = document.querySelectorAll(".name");
  const year = document.querySelectorAll(".year");
  const color = document.querySelectorAll(".color");
  const pantone = document.querySelectorAll(".pantone");

  buttonsArr.push(chId, chName, chYear, chColor, chPval);
  const colArr = {
      id,
      name,
      year,
      color,
      pantone
  };


  const check = new CheckBoxes(resetButton, buttonsArr, colArr);
  check.addEventListeners()
}

