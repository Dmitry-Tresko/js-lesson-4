function clearLeftForm() {
    let inputTextEl = document.getElementById('inputText');
    inputTextEl.value = '';
}

function clearRightForm() {
    let outputTextEl = document.getElementById('outputText');
    outputTextEl.innerHTML = '';
}

function chooseColor() {
    let colorEl = document.getElementsByClassName('color-choice')[0];
    let outputTextEl = document.getElementById('outputText');
    outputTextEl.style.color = colorEl.value;
}

function convertText() {
    const inputTextEl = document.getElementById('inputText');
    document.getElementById('outputText').innerHTML = inputTextEl.value;
}