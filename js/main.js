// Получение нужных элементов
const questSection = document.querySelector("#quest-section");
const answerInput = document.querySelector("#answer");
const submitBtn = document.querySelector("#submit");
const popup = document.querySelector(".popup");

// Ответ на загадку
const rightSolution = "Тыква";

// Функция, которая будет валидировать значения
const validateQuestOpen = () => {
  let isCorrect = questSection.offsetTop - Math.round(window.scrollY) <= 0;
  if (isCorrect) {
    popup.classList.add("open");
    document.body.classList.add("lock-scroll");
  }
};

const validateAnswer = (answer) => {
  if (answer !== rightSolution) {
    answerInput.classList.add("fail");
  } else {
    answerInput.classList.remove("fail");
    popup.classList.remove("open");
    document.body.classList.remove("lock-scroll");
    window.removeEventListener("scroll", validateQuestOpen);
  }
};
// Слежка за положением
window.addEventListener("scroll", validateQuestOpen);

// Слежка за нажатием кнопки
submitBtn.addEventListener("click", () => {
  const userValue = answerInput.value;
  validateAnswer(userValue);
});
