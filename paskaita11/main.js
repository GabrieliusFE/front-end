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

function test1() {
    incr = incr + 10
    document
        .getElementById('container')
        .style.fontSize = incr + 'px'

};

function test2() {
    incr = incr - 10
    document
        .getElementById('container')
        .style.fontSize = incr + 'px'
};

function test3() {
    document
        .getElementById('container')
        .style.backgroundColor = 'blue'
};

function test4() {
    document
        .getElementById('container')
        .style.backgroundColor = 'red'
};

function test5() {
    incr = 50;
    document
        .getElementById('container')
        .style.fontSize = incr + 'px'
};

function test6() {
    box = box + 10;
    document
        .getElementById('container')
        .style.height = box + 'px';
    document
        .getElementById('container')
        .style.width = box + 'px';
};

function test7() {
    box = box - 10;
    document
        .getElementById('container')
        .style.height = box + 'px';
    document
        .getElementById('container')
        .style.width = box + 'px';
};

function test8(){
    document
    .getElementById('container')
    .style.color = arrayOfColors[index];
    index = (index + 1) %arrayOfColors.length;
};

document.getElementById('test1').onclick = test1;
document.getElementById('test2').onclick = test2;
document.getElementById('test3').onclick = test3;
document.getElementById('test4').onclick = test4;
document.getElementById('test5').onclick = test5;
document.getElementById('test6').onclick = test6;
document.getElementById('test7').onclick = test7;
document.getElementById('test8').onclick = test8;
console.log(objTest);
console.log(arrnumb);
console.log(string);
console.log(pow);