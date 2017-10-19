"use strict";

//--------ЗАДАНИЕ 1
var today = new Date();

var yearOfBirthdayInput = document.getElementById("yearOfBirthday");
yearOfBirthdayInput.addEventListener("change",checkAge);

function checkAge() {


    var sYearOfBirthday = yearOfBirthdayInput.value;
    if (sYearOfBirthday) {//Если не пустая строка - должно быть true
        var curentYear = today.getFullYear();
        if (sYearOfBirthday.length == 2) {
            var userYear = parseInt("20" + sYearOfBirthday);
        } else {
            var userYear = parseInt(sYearOfBirthday);
        }
        alert("Вам сейчас " + (curentYear - userYear > 0 ? curentYear - userYear : 0 ) + "лет!");
    }

}

//--------ЗАДАНИЕ 2


var firstNumberInput = document.getElementById("firstNumber");
firstNumberInput.addEventListener("change", compareNumbers);
var secondNumberInput = document.getElementById("secondNumber");
secondNumberInput.addEventListener("change",compareNumbers);

function compareNumbers() {

    var firstNumber = parseInt(firstNumberInput.value);
    var secondNumber = parseInt(secondNumberInput.value);

    if(isNaN(firstNumber) || isNaN(secondNumber)){
        return;
    }

    if (firstNumber == secondNumber) { //автоматическое преобразование в число
        alert("Числа равны!");
    } else {
        alert("Максимальное число:  " + (firstNumber > secondNumber ? firstNumber : secondNumber));
    }

}

//--------ЗАДАНИЕ 3
function findPorch() {

    var flat = parseInt(document.getElementById("flat").value);

    if(isNaN(flat)){
        return;
    }

    if(flat >= 1 && flat <= 20){
        alert("Это первый подъезд");
    } else if (flat >= 21 && flat <= 64){
        alert("Это второй подъезд");
    } else if(flat >= 65 && flat <= 80){
        alert("Это третий подъезд");
    } else{
        alert("В доме нет такой квартиры!");
    }
}

//--------ЗАДАНИЕ 4
function logIn(){

    var accauntsList = [
        {login:"ivan", password:"333"},
        {login:"ssss", password:"666"},
        {login:"gibs", password:"999"}
    ];

    var userLogin = document.getElementById("login").value;
    var userPassword = document.getElementById("password").value;

    var succsess = false;
    for(var i=0; i<accauntsList.length; i++){
        var accaunt = accauntsList[i];
        console.log(accaunt);
        if(accaunt.login === userLogin && accaunt.password === userPassword){
            succsess = true;
            break;
        }
    }

    if(succsess){
        alert("Добро пожаловать!");
    } else{
        alert("ошибка");
    }
}

//--------ЗАДАНИЕ 5
var numberList = document.querySelectorAll("#task5_firstNumber,#task5_secondNumber,#task5_thirdNumber");
for(var i=0;i<numberList.length;i++){
    numberList.item(i).addEventListener("change",compareThreeNumbers);
}

function compareThreeNumbers(){

    var firstNumber = parseInt(document.getElementById("task5_firstNumber").value);
    var secondNumber = parseInt(document.getElementById("task5_secondNumber").value);
    var thirdNumber = parseInt(document.getElementById("task5_thirdNumber").value);

    if(isNaN(firstNumber) && isNaN(secondNumber) && isNaN(thirdNumber)){
        return;
    }

    firstNumber = isNaN(firstNumber) ? -Infinity : firstNumber;
    secondNumber = isNaN(secondNumber) ? -Infinity : secondNumber;
    thirdNumber = isNaN(thirdNumber) ? -Infinity : thirdNumber;

    if (firstNumber == secondNumber && firstNumber == thirdNumber){
         alert("Числа равны!");
         return;
    }

    var maxNumber = firstNumber > secondNumber && firstNumber > thirdNumber ? firstNumber :
        secondNumber > firstNumber && secondNumber > thirdNumber ? secondNumber : thirdNumber;

    alert("Максимальное число:  " + maxNumber);
}

//--------ЗАДАНИЕ 6-1
var displayEvnButton = document.getElementById("displayEvnBtn");
var displayEvnSpan = document.getElementById("displayEvnText");

displayEvnButton.addEventListener("click",displayEvnNumbers);

function displayEvnNumbers() {
    var result = "";
    for(var i=0;i<=100;i++){
       if(i%2 === 0){
           result += i + ", ";
       }
    }
    displayEvnSpan.textContent = result;

}

//--------ЗАДАНИЕ 6-2
var displayDecrementButton = document.getElementById("displayDecrementBtn");
var displayDecrementSpan = document.getElementById("displayDecrementText");

displayDecrementButton.addEventListener("click",displayIncrement);

function displayIncrement() {
    var result = "";
    for(var i=200; i>=0; i--){
        result += i + ", ";
    }
    displayDecrementSpan.textContent = result;
}

//--------ЗАДАНИЕ 6-3
var displaySumButton = document.getElementById("displaySumBtn");
var displaySumSpan = document.getElementById("displaySumText");

displaySumButton.addEventListener("click",displaySum);

function displaySum() {

    var resultText = "";
    for(var i=0, result =0; i<=100; i++){
        result += i;
        resultText += result + ", ";
    }
    displaySumSpan.textContent = resultText;
}

//--------ЗАДАНИЕ 6-4
var displayExpButton = document.getElementById("displayExpBtn");

var displayExpSpan = document.getElementById("displayExpText");
displayExpButton.addEventListener("click",displayExp);

function displayExp() {
    var result = 1;
    var baseNumber = parseInt(document.getElementById("baseNumber").value);
    var exponent = parseInt(document.getElementById("exponent").value);
    for(var i=1; i<=exponent; i++){
        result *= baseNumber;
    }
    displayExpSpan.textContent = result;
}

//--------ЗАДАНИЕ 6-5
var displayMultiplicationTableButton = document.getElementById("displayMultiplicationTableBtn");

var displayMultiplicationTableSpan = document.getElementById("displayMultiplicationTableText");
displayMultiplicationTableButton.addEventListener("click",displayMultiplicationTable);

function displayMultiplicationTable() {
    var result = "";
    const NUMBER = 7;
    for(var i=1; i<=9; i++){
        result += i + "+" + NUMBER + "=" + i*NUMBER + "<br>";
    }
    displayMultiplicationTableSpan.innerHTML = result;
}

//--------ЗАДАНИЕ 6-6
var displayMultiplicationButton = document.getElementById("displayMultiplicationBtn");
var displayMultiplicationSpan = document.getElementById("displayMultiplicationText");

displayMultiplicationButton.addEventListener("click",displayMultiplication);

function displayMultiplication() {

    for(var i=1, result = 1; i<=50; i++){
        result *= i;
    }
    displayMultiplicationSpan.textContent = result;
}

//--------ЗАДАНИЕ 6-7
var displaySpecSymbolsButton = document.getElementById("displaySpecSymbolsBtn");
var displaySpecSymbolsSpan = document.getElementById("displaySpecSymbolsText");

displaySpecSymbolsButton.addEventListener("click",displaySpecSymbols);

function displaySpecSymbols() {

    var result="";
    for(var i=1000; i<=2000; i++){
        result += "&#" + i + ", ";
    }
    displaySpecSymbolsSpan.innerHTML = result;
}
