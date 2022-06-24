let operation = prompt("Select the operation you would like to perform: '+', '-', '/' or '*'.")
let numberOne = parseFloat(prompt("Enter your first value ...")) ;
let numberTwo = parseFloat(prompt("Enter your second value ..."));

function addition(){
    let result = numberOne + numberTwo;
    let resultt = alert(result);
    return resultt;
}

function subtraction(){
    let result = numberOne - numberTwo;
    let resultt = alert(result);
    return resultt;
}


function division(){
    let result = numberOne / numberTwo;
    let resultt = alert(result);
    return resultt;
}


function multiplication(){
    let result = numberOne * numberTwo;
    let resultt = alert(result);
    return resultt;
}

if (operation == '+'){
    addition();
}else if (operation == '-'){
    subtraction();
}else if (operation == '/'){
    division();
}else if (operation == '*'){
    multiplication();
}else{
    alert("Invalid operation!!! Please choose a valid operation.")
}