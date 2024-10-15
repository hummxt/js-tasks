const display = document.calc.result;
const buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value
        
        if (value === 'AC') {
            display.value = ''
        } else if (value === '=') {
            try {
                display.value = eval(display.value.replace(/,/g, '.'));
            } catch (e) {
                display.value = 'Error';
            }
        }
        else {
            display.value += value;
        }
    })
})