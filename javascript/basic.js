console.log("Hello World from basic.js");

var numString = "";
var equationString = "";

//-----------------------------------------------Calculator
function clearEntry() {
    numString = "";
    console.log(numString);
    document.getElementById("currentNum").textContent = 0;
};

function clearAll() {
    numString = "";
    equationString = "";
    console.log(numString, equationString);
    document.getElementById("currentNum").textContent = 0;
    document.getElementById("fullEquation").textContent = "";
};

function inputCurrentNumber(id) {
    document.getElementById("fullEquation").textContent = equationString;
    console.log(document.getElementById(id).value);
    
    var newDigit = document.getElementById(id).value;
    numString = numString + newDigit;
    
    console.log(numString);
    document.getElementById("currentNum").textContent = numString;
};

function inputBracket(id) {
    document.getElementById("fullEquation").textContent = equationString;
    console.log(document.getElementById(id).value);
    
    var addBracket = document.getElementById(id).value;
    numString = numString + addBracket;
    
    console.log(numString);
    document.getElementById("currentNum").textContent = numString;
};

function useOperator(id) {
    document.getElementById("fullEquation").textContent = equationString;
    var newOperator = document.getElementById(id).value;
    console.log(newOperator);
    
    equationString = equationString + numString + newOperator;
    document.getElementById("fullEquation").textContent = equationString;
    
    numString = "";
    document.getElementById("currentNum").textContent = 0;
};

function solveEquation() {
    document.getElementById("fullEquation").textContent = equationString;
    equationString = equationString + numString;
    document.getElementById("fullEquation").textContent = equationString + "=";
    
    var calcTotal = eval(equationString);
    console.log(calcTotal);
    document.getElementById("currentNum").textContent = calcTotal;
    
    numString = "";
    equationString = "";
}

//---------------------------------------------Canadian Taxes

function calculateTotalTaxes(){
    var totalIncome = document.getElementById("totalIncome").value;
    console.log(totalIncome);
    
    var incomeBracket1 = 0;
    var incomeBracket2 = 0;
    var incomeBracket3 = 0;
    var incomeBracket4 = 0;
    var incomeBracket5 = 0;
    
    var remanderIncome;
    var taxTotal;
    var text;
     
    if (totalIncome <= 47630){
        incomeBracket1 = totalIncome*.15;
        
        document.getElementById("taxBracket1").textContent = "$" + totalIncome + " of your income was taxed at 15% for a total of $" + incomeBracket1;
    } else if (totalIncome > 47630 && totalIncome <= 95259) {
        incomeBracket1 = 47630*.15;
        
        remanderIncome = totalIncome - 47630;
        incomeBracket2 = remanderIncome*.205;
        
        document.getElementById("taxBracket1").textContent = "$47630 of your income was taxed at 15% for a total of $" + incomeBracket1;
        document.getElementById("taxBracket2").textContent = "$" + remanderIncome + " of your income was taxed at 20.5% for a total of $" + incomeBracket2;
    } else if (totalIncome > 95259 && totalIncome <= 147667) {
        incomeBracket1 = 47630*.15;
        incomeBracket2 = 47629*.205
        
        remanderIncome = totalIncome - 95259;
        incomeBracket3 = remanderIncome*.26;
        
        document.getElementById("taxBracket1").textContent = "$47630 of your income was taxed at 15% for a total of $" + incomeBracket1;
        document.getElementById("taxBracket2").textContent = "$47629 of your income was taxed at 20.5% for a total of $" + incomeBracket2;
        document.getElementById("taxBracket3").textContent = "$" + remanderIncome + " of your income was taxed at 26% for a total of $" + incomeBracket3;
    } else if (totalIncome > 147667 && totalIncome <= 210371) {
        incomeBracket1 = 47630*.15;
        incomeBracket2 = 47629*.205;
        incomeBracket3 = 52408*.26;
        
        remanderIncome = totalIncome - 147667;
        incomeBracket4 = remanderIncome*.29;
        
        document.getElementById("taxBracket1").textContent = "$47630 of your income was taxed at 15% for a total of $" + incomeBracket1;
        document.getElementById("taxBracket2").textContent = "$47629 of your income was taxed at 20.5% for a total of $" + incomeBracket2;
        document.getElementById("taxBracket3").textContent = "$52408 of your income was taxed at 26% for a total of $" + incomeBracket3;
        document.getElementById("taxBracket4").textContent = "$" + remanderIncome + " of your income was taxed at 29% for a total of $" + incomeBracket4;
    } else if (totalIncome > 210371) {
        incomeBracket1 = 47630*.15;
        incomeBracket2 = 47629*.205;
        incomeBracket3 = 52408*.26;
        incomeBracket4 = 62704*.29;
        
        remanderIncome = totalIncome - 210371;
        incomeBracket5 = remanderIncome*.33;
        
        document.getElementById("taxBracket1").textContent = "$47630 of your income was taxed at 15% for a total of $" + incomeBracket1;
        document.getElementById("taxBracket2").textContent = "$47629 of your income was taxed at 20.5% for a total of $" + incomeBracket2;
        document.getElementById("taxBracket3").textContent = "$52408 of your income was taxed at 26% for a total of $" + incomeBracket3;
        document.getElementById("taxBracket4").textContent = "$62704 of your income was taxed at 29% for a total of $" + incomeBracket4;
        document.getElementById("taxBracket5").textContent = "$" + remanderIncome + " of your income was taxed at 33% for a total of $" + incomeBracket5;
    }
    
    taxTotal = incomeBracket1 + incomeBracket2 + incomeBracket3 + incomeBracket4 + incomeBracket5;
    console.log("Total Tax:", taxTotal);
    document.getElementById("totalTax").textContent = "Total taxes is: $" + taxTotal;
}