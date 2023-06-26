
function Addition() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    if (isNaN(number1) || isNaN(number2)) {  
        result = "Es necesarios introducir dos números válidos";
        document.getElementById('result').innerHTML = result; 
        }
        else {   
            result = number1 + number2;
        document.getElementById('result').innerHTML = "La suma de " + number1 + " + " + number2 + " = " + result;    
        }  
    } 


function Subtraction() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    if (isNaN(number1) || isNaN(number2)) {  
        result = "Es necesarios introducir dos números válidos";
        document.getElementById('result').innerHTML = result; 
        }
        else {   
        result = number1 - number2;
        document.getElementById('result').innerHTML = "La resta de " + number1 + " - " + number2 + " = " + result;    
        }  
    } 


function Multiplication() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    if (isNaN(number1) || isNaN(number2)) {  
        result = "Es necesarios introducir dos números válidos";
        document.getElementById('result').innerHTML = result; 
        }
        else {   
            result = number1 * number2;
        document.getElementById('result').innerHTML = "La multiplicación de " + number1 + " * " + number2 + " = " + result;    
        }  
    } 


function Division() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    if (isNaN(number1) || isNaN(number2)) {  
        result = "Es necesarios introducir dos números válidos";
        document.getElementById('result').innerHTML = result; 
        }
        else {   
            result = number1/number2;
        document.getElementById('result').innerHTML = "La divisón de " + number1 + " / " + number2 + " = " + result;    
        }  
    } 

function Percentage() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    if (isNaN(number1) || isNaN(number2)) {  
        result = "Es necesarios introducir dos números válidos";
        document.getElementById('result').innerHTML = result; 
        }
        else {   
            result = (number1 * number2) / 100;
        document.getElementById('result').innerHTML = "El porcentaje de " + number1 + " y " + number2 + " es " + result + "%";    
        }
}

function Clean() {
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    document.getElementById('result').innerHTML = "";
}

