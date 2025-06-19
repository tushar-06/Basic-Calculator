
let dispaly = document.querySelector("#display");

function appendValue(val){
    dispaly.value += val;
}

function clearDisplay(){
    dispaly.value = "";
}

function calculate(){
    try{
        dispaly.value = eval(dispaly.value);
    }catch(error){
        alert("Invalid Expression")
        
    }
}