"use strict";

var clickCounter = 0;

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
    pow(number, powNumber);
}

function pow(number, pow) {
    alert(Math.pow(number, pow));
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
    array = arrayInput.value.split(",");
    alert(arrayInput.value);
    var arrayLength = getArrayLength();
    alert(arrayLength);
}

function getArrayLength(array) {

    if(array === undefined){
        alert("Ошибка рпределения длинны масива!");
        return 0;
    }

    return array.length;
}