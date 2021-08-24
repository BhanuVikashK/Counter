
let counterElement = document.getElementById("counterValue");



function onDecrease(){
    let previousValue=counterElement.textContent;
    let updatedValue= parseInt(previousValue) - 1 ;
    counterElement.textContent=updatedValue;

    if (updatedValue>0){
        counterElement.style.color="Green";
    }
    else if (updatedValue<0){
        counterElement.style.color="Red";
    }
    else{
        counterElement.style.color="Black";
    }
}

function onReset(){
    let updatedValue= 0 ;
    counterElement.textContent=updatedValue;
    counterElement.style.color="black";
}

function onIncrease(){
    let previousValue=counterElement.textContent;
    let updatedValue= parseInt(previousValue) + 1 ;
    counterElement.textContent=updatedValue;
    if (updatedValue>0){
        counterElement.style.color="Green";
    }
    else if (updatedValue<0){
        counterElement.style.color="Red";
    }
    else {
        counterElement.style.color="Black";
    }
}
