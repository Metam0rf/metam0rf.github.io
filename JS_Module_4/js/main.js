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
        item.addEventListener("click", clickCounting)
    })
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