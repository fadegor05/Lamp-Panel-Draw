/**
 * 
 *         Lamp-Panel-Draw
 *         developed by https://github.com/fadegor05/
 * 
 */
function mainHandler(){
    copyObj.textContent = "copy"
    lampsObjectsList.forEach(function (element,i) {
        let b = "";
        element.forEach(subElement =>{
            b += subElement.textContent
        })
        outputObjectsList[i].textContent = parseInt(Number(b),2).toString(16).toUpperCase();
    })
}


function copyHandler () {
    
    navigator.clipboard.writeText(wrapperObj.innerText)
    .then(()=>{
        copyObj.textContent = "copied!";
    })
}

function lampHandler (e){
    if(e.target.textContent == 0){
        e.target.textContent = 1;
        e.target.classList.add('td-activated')
    }
    else {
        e.target.textContent = 0;
        e.target.classList.remove('td-activated')
    }
    mainHandler();
}

