"use strict";

var clickCounter = 0;
var randomNumber = Math.round(Math.random()*10);
var tryCounter = 3;
var tryCounterElement = document.querySelector("#tryCounter");
var userRandomNumberInput = document.querySelector("#userRandomNumber");

(function () {
    var setTextColorBttn = document.getElementById("setRedText");
    setTextColorBttn.addEventListener("click", setColorToElements);

    var setImgShadowBttn = document.getElementById("setImgShadow");
    setImgShadowBttn.addEventListener("click", setShadowToElements);

    var setPNumbersBttn = document.getElementById("setParagraphNumbers");
    setPNumbersBttn.addEventListener("click", setParagraphNumbers);

    var clickCountingElements = document.querySelectorAll(".clickCounting");
    clickCountingElements.forEach(function (item) {
        item.addEventListener("click", clickCounting);
    })

    var powBttn = document.querySelector("#powBttn");
    powBttn.addEventListener("click", powEvent);

    var setBorderBottomBttn = document.querySelector("#setBorderBottomBttn");
    setBorderBottomBttn.addEventListener("click", setBorderBottomEvent);

    var ageInputElement = document.querySelector("#ageInput");
    ageInputElement.addEventListener("change", onChangeAge);

    var displayArrayLengthBttn = document.querySelector("#displayArrayLengthBttn");
    displayArrayLengthBttn.addEventListener("click", clickArrayLengthBttnHandler);

    var checkNumberBttn = document.querySelector("#checkNumberBttn");
    checkNumberBttn.addEventListener("click", checkNumberHandler);

    var quessNumberBttn = document.querySelector("#quessNumberBttn");
    quessNumberBttn.addEventListener("click", quessNumberHandler);

})();

//---------Task 1
function setColorToElements(){
    var elements;
    var color = "red";
    elements = document.querySelectorAll("p");
    elements.forEach(function (item) {
        item.style.color = color;
    });

}

//---------Task 2
function setShadowToElements(){
    var elements, color = "black";
    var styleShadow = "0 0 10px " + color;
    elements = document.querySelectorAll("img");
    elements.forEach(function (item) {
        item.style.boxShadow = styleShadow;
    })
}

//---------Task 3
function setParagraphNumbers() {
    var elements = document.querySelectorAll("p");
    var iter = 1;
    elements.forEach(function (item) {
        item.textContent = iter + ". " + item.textContent;
        iter += 1;
    })
}

//---------Task 4
function clickCounting() {
    clickCounter += 1;
    var displayCounterText = document.getElementById("displayCounter");
    displayCounterText.textContent = "Количество нажатий: " + clickCounter;
}

//---------Task 5
function powEvent() {
    var numberElement = document.querySelector("#number");
    var powNumberElement = document.querySelector("#powNumber");
    var number = parseInt(numberElement.value);
    var powNumber = parseInt(powNumberElement.value);
    alert(pow(number, powNumber));
}

function pow(number, pow) {
    return Math.pow(number, pow);
}

//---------Task 6
function setBorderBottomEvent() {
    var tagName = document.querySelector("#tagNameInput").value;
    setBorderBottomToElement(tagName);
}

function setBorderBottomToElement(elementName) {
    elementName = elementName || "p";
    var allElements = document.querySelectorAll(elementName);
    allElements.forEach(function (item) {
        item.style.setProperty("border-bottom","2px solid red","");
    });
}

//---------Task 7
function onChangeAge(event) {
    var age = parseInt(event.target.value);
    checkAge(age);
}

function checkAge(age) {

    // Вариант с '||' когда age = 0
    if(age || undefined === undefined){
        alert("Введите возраст");
        return;
    }

    //Вариант с 'age = undefined'
    if(age === undefined){
        alert("Введите возраст");
        return;
    }

    age >= 16 ? alert("Добро пожаловать!") : alert("Вы еще молоды!");
}

//---------Task 9
function clickArrayLengthBttnHandler() {
    var arrayInput = document.querySelector("#arrayInput");
    var textFromInput = arrayInput.value;
    var array = textFromInput.split(",");
    var arrayLength = getArrayLength(array);
    alert(arrayLength);
}

function getArrayLength(array) {

    if(array === undefined){
        alert("Ошибка рпределения длинны масива!");
        return 0;
    }

    return array.length;
}

//---------Task 10
function checkNumberHandler() {

    var numberInputElement = document.querySelector("#numberInput");
    var numberToCheck = parseInt(numberInputElement.value);
    alert(checkNumber(numberToCheck));
}

function checkNumber(number) {

    if(number > 10){
        return "" + pow(number, 2);
    } else if(number < 7){
        return "Число меньше 7";
    } else return "" + number;


}

//---------Task 11
function quessNumberHandler() {

    if(tryCounter == 0){
        alert("Все попытки исчерпано!");
        return;
    }

    var userNumber = parseInt(userRandomNumberInput.value);

    if(randomNumber > userNumber){
        alert("Угадываемое число больше");
    } else if(randomNumber < userNumber){
        alert("Угадываемое число меньше");
    } else {
        tryCounterElement.textContent = "Число разгадано!";
        alert("Вы угадали число!");
        return;
    }

    tryCounter -= 1;
    tryCounterElement.textContent = "Осталось попыток: " + tryCounter;
}