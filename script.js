const display = document.getElementById("display");
const operators = ["+", "-", "*", "/"];

function addToScreen(x) {
    if ((operators.includes(x) && operators.includes(display.value.slice(-1))) || (display.value.length === 0) && operators.includes(x)) {

    } else {
        display.value += x;
    }

}

function clearDisplay() {
    display.value = '';
}
function del() {
    display.value = display.value.slice(0, display.value.length - 1);
}
function calc() {
    if (eval(display.value)) {
        display.value = eval(display.value);
    }
    else {
        display.value = "Error";
    }
}
function sine(degrees) {
    degrees = parseFloat(degrees) || 0;

    const radians = degrees * (Math.PI / 180);

    let result = Math.sin(radians);
    if (Math.abs(result) < 1e-10) {
        result = 0;
    }

    display.value = result;
}
function cosin(degrees) {
    degrees = parseFloat(degrees) || 0;

    const radians = degrees * (Math.PI / 180);

    let result = Math.cos(radians);
    if (Math.abs(result) < 1e-10) {
        result = 0;
    }

    display.value = result;
}
function tang(degrees) {
    degrees = parseFloat(degrees) || 0;

    const radians = degrees * (Math.PI / 180);

    let result = Math.tan(radians);
    if (Math.abs(result) < 1e-10) {
        result = 0;
    }

    display.value = result;
}
function Log10(x) {
    display.value = Math.log10(x);
}