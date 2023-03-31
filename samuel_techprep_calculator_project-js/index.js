let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerText);
    });
});

document.addEventListener('keydown', (e) => {
    handleInput(e.key);
});

function handleInput(input) {
    switch (input) {
        case 'C':
        case 'c':
            display.innerText = '';
            break;
        case '=':
        case 'Enter':
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error";
            }
            break;
        case 'Backspace':
        case '←':
            if (display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
            }
            break;
        default:
            const validInputs = "0123456789+-/*().";
            if (validInputs.includes(input)) {
                display.innerText += input;
            }
    }
}
