const numBox = document.getElementById('num-box');
const addBtn = document.getElementById('add-button');
const subtractBtn = document.getElementById('subtract-button');
const resetBtn = document.getElementById('reset-button');

let counter = 0;

const add = () => {
    counter++;
    numBox.innerHTML = counter;
};

const subtract = () => {
    counter--;
    numBox.innerHTML = counter;
};

const reset = () => {
    numBox.innerHTML = 0;
    counter = 0;
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
resetBtn.addEventListener('click', reset);