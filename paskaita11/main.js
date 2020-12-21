"use script"

let pow = 25;

let string = `trys`;

let arrnumb = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
];

let objTest = {
    a: 1,
    arr: [1, 2, 10],
}
let incr = 50;

if (pow == 25) {
    pow = Math.pow(2, pow);
};
let box = 250;

let arrayOfColors = [
    'red',
    'green',
    'blue',
    'black',
    'white',
    'orange',
    'yellow',
    'pink',
    'puprle',
    'brown',
];

let index = 0;

document
.getElementById('container')
.style.transition = 'linear 300ms'

function incrSize() {
    incr = incr + 10
    document
        .getElementById('container')
        .style.fontSize = incr + 'px';

};

function decrSize() {
    incr = incr - 10
    document
        .getElementById('container')
        .style.fontSize = incr + 'px';
   
};

function colorBlue() {
    document
        .getElementById('container')
        .style.backgroundColor = 'blue';
   
};

function colorRed() {
    document
        .getElementById('container')
        .style.backgroundColor = 'red';
};

function basicSize() {
    incr = 50;
    document
        .getElementById('container')
        .style.fontSize = incr + 'px';
};

function incrBoxSize() {
    box = box + 10;
    document
        .getElementById('container')
        .style.height = box + 'px';
    document
        .getElementById('container')
        .style.width = box + 'px';
};

function decrBoxSize() {
    box = box - 10;
    document
        .getElementById('container')
        .style.height = box + 'px';
    document
        .getElementById('container')
        .style.width = box + 'px';
};

function colorChnageHover() {
    let randomColor = Math.floor(arrayOfColors.length * Math.random())
    document
        .getElementById('container')
        .style.color = arrayOfColors[randomColor];
        //.style.color = arrayOfColors[index];
    //index = (index + 1) %arrayOfColors.length;
};

document.getElementById('incrSize').onclick = incrSize;
document.getElementById('decrSize').onclick = decrSize;
document.getElementById('basicSize').onclick = basicSize;
document.getElementById('colorBlue').onclick = colorBlue;
document.getElementById('colorRed').onclick = colorRed;
document.getElementById('incrBoxSize').onclick = incrBoxSize;
document.getElementById('decrBoxSize').onclick = decrBoxSize;
document.getElementById('colorChnageHover').onmouseover = colorChnageHover;
console.log(objTest);
console.log(arrnumb);
console.log(string);
console.log(pow);