/**
 * 
 *         Lamp-Panel-Draw
 *         developed by https://github.com/fadegor05/
 * 
 */

const tableObj = document.querySelector('#table-container')
const outputObj = document.querySelector('#code-output')
const wrapperObj = document.querySelector('.code-wrapper')
const templateOutObj = document.querySelector('#code-row-template')
const templateOutDataObj = templateOutObj.content.querySelector('.code-row-data')
const copyObj = document.querySelector('.code-copy-btn')

let simplifiedLampsObjectsList = Array();
let lampsObjectsList = Array();
let outputObjectsList = Array();

const heightConst = 8;
const widthConst = 16;

window.onload = initApp;

function initDraw(height, width){
    for (var i = 0; i < height; i++){
        let tempObjectsList = Array();
        let row = document.createElement('tr');
        for(var j = 0; j < width; j++){
            let point = document.createElement('td');
            point.textContent = '0'
            row.appendChild(point);
            tempObjectsList.push(point)
            simplifiedLampsObjectsList.push(point)
        }
        tableObj.appendChild(row);
        lampsObjectsList.push(tempObjectsList)
    }
}

function initOutput(height) {
    for (var i = 0; i < height; i++){
        templateOutDataObj.id = "code-row-" + i;
        let row = templateOutObj.content.cloneNode(true);
        outputObj.appendChild(row);
        outputObjectsList.push(document.querySelector("#code-row-" + i));
    }
}

function initApp(){    
    initDraw(heightConst, widthConst);
    initOutput(heightConst);
    for ( let button of simplifiedLampsObjectsList ){
        button.addEventListener("click", lampHandler);
    }
    copyObj.addEventListener("click", copyHandler);
    mainHandler();
}
