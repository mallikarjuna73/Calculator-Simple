function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendCharacter(char) {
    document.getElementById('display').value += char;
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
