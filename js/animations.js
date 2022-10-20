const INCREASE_NUMBER_ANIMATION_SPEED = 100;
function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + '+';
    } else {
      element.innerText = i;
    }
    i += 100;
    setTimeout(() => { increaseNumberAnimationStep(i, element, endNumber) }, INCREASE_NUMBER_ANIMATION_SPEED);
  }
};
function initIncreaseNumberAnimation() {
  let element = document.querySelector('.features__clients-count');
  increaseNumberAnimationStep(0, element, 5000);
}
initIncreaseNumberAnimation();
document.querySelector('#bubget').addEventListener('change', function handleSelectChange(event) {
  let otherInput = document.querySelector('.form__other-input');;
  if (event.target.value === 'other') {
    let formContainer = document.createElement("div");// добавить еще одно текстовое поле
    formContainer.classList.add("form__other-input");
    formContainer.classList.add("form__group");
    //присваеваем два класса
    let input = document.createElement('input');
    input.placeholder = "Введите ваш вариант";//создаем свойство равное...
    input.type = 'text'; //создаем свойство равное...
    formContainer.appendChild(input);//добавляем дочернний input
    document.querySelector('form').insertBefore(formContainer, document.querySelector('.form__submit')) //Добавляем дочерний элемент в form перед элементом с классом .form__submit
    };
  if (event.target.value !== 'other' && otherInput) //в селекте выбрали вариант НЕ и элемент с текстовым полем есть на странице
  {
    otherInput = document.querySelector('.form__other-input'); // получаем созданный элемент
    document.querySelector('form').removeChild(otherInput); // Удаляем ранее добавленное текстовое поле, если оно есть в DOM
  }
});