// получаем все элементы селекта
const select = document.querySelector(".select");
const selectButton = select.querySelector(".select__button");
const selectList = select.querySelector(".select__list");
const selectItems = select.querySelectorAll(".select__list-item");
const selectInput = select.querySelector(".select__input-hidden");

// функция для сворачивания списка
function closeSelect() {
  select.classList.remove("select--active");
  selectList.classList.remove("select__list--visible");
}

// добавляем обработчик событий на клик по кнопке селекта
selectButton.addEventListener("click", () => {
  event.preventDefault(); // Prevent default button behavior
  select.classList.toggle("select--active"); //  Переключаем класс select--active
});

// добавляем обработчики событий на клик по элементам списка
selectItems.forEach((item) => {
  item.addEventListener("click", () => {
    event.preventDefault(); // Prevent default button behavior
    selectButton.textContent = item.textContent;
    selectInput.value = item.dataset.value; //  Более удобный доступ к атрибуту data-value
    select.classList.remove("select--active"); // Закрываем список после выбора
  });
});

// добавляем обработчик событий на нажатие клавиши "Tab"
select.addEventListener("keydown", function (event) {
  // если нажата клавиша "Tab"
  if (event.code === "Tab") {
    // получаем фокусированный элемент
    const focusedElement = document.activeElement;
    // если фокус находится на последнем элементе списка
    if (focusedElement === selectItems[selectItems.length - 1]) {
      // сворачиваем список
      closeSelect();
    }
  }
});

// добавляем обработчик событий на клик по полю за пределами списка
document.addEventListener("click", function (event) {
  // если клик был за пределами селекта
  if (!select.contains(event.target)) {
    // сворачиваем список
    closeSelect();
  }

  // добавляем обработчик событий на нажатие клавиши Esc
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      select.classList.remove("select--active");
      selectList.classList.remove("select__list--visible");
    }
  });
});
