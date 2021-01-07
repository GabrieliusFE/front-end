const boxArea = document.querySelector('div')
function onload() {
    const boxList = []
    for (let i = 0; i < 3; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        boxList.push(box)
        boxArea.appendChild(box);
        box.addEventListener('click', function () {
            for(let k = 0; k < boxList.length; k += 1){
            boxList[k].style.background = 'black'
            }
            box.style.background = 'green'
    })
}
}
//Nepavyko savo budu naudojant classes tai padariau sita remdamas jusu kodu

window.addEventListener('load', onload)