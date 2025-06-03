const display = document.querySelector('.resultado');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const reset = document.querySelector('.reset');
const del = document.querySelector('.del');

number.forEach(button => {
    button.addEventListener('click', ()=> {
        const value = button.textContent;
        if (display.textContent === '0') {
            display.textContent = value;
        } else {
            display.textContent += value;
        }
    });

});
