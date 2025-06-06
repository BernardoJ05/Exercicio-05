//temas
document.body.classList.add('theme-1');
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

let currentTheme=1;

themeToggle.addEventListener('click', () => {
    currentTheme++;
    if (currentTheme > 3) currentTheme = 1;
    body.className = `theme-${currentTheme}`;
});

//funcional
const display = document.querySelector('.result');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const reset = document.querySelector('.span-2');
const del = document.querySelector('.action');


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


operator.forEach(button => {
    button.addEventListener('click', ()=> {
        const value = button.textContent;
        if (display.textContent += value) {
        }
    });
});

equals.addEventListener('click', ()=> {
    try {
        const result = eval(display.textContent.replace('x', '*'));
        display.textContent = result;
    } catch {
        display.textContent = "Erro";
    }
});

reset.addEventListener('click', () => {
    display.textContent = '0';
});

del.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1) || '0';
});

