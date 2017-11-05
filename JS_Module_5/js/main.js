"use strict";

//---------Task 1
const textInputTask1 = document.querySelector("#userText");
textInputTask1.addEventListener("change", function () {
    const textDisplayElement = document.querySelector("#displayText1");
    textDisplayElement.textContent = textInputTask1.value.length;
});

//---------Task 2
const arrayOfImgPathes = ["adventure__340", "african-lion", "chestnut", "pumpkin"];
const displayImagesBttn = document.querySelector("#displayImagesBttn");
displayImagesBttn.addEventListener("click", function () {
    for (let i = 0; i < arrayOfImgPathes.length; i++) {
        let newImg = document.createElement("img");
        newImg.setAttribute("src", "assets/img/" + arrayOfImgPathes[i] + ".jpg");
        displayImagesBttn.parentNode.appendChild(newImg);
    }
});

//---------Task 3
const urlTextInput = document.querySelector("#userUrl");
const displayUrlElement = document.querySelector("#displayDomen");

urlTextInput.addEventListener("change", function () {

    const fullURL = urlTextInput.value.toLowerCase();
    let textDomen = "";

    if (~fullURL.indexOf("https://")) {
        textDomen = fullURL.slice("https://".length);
    } else if (~fullURL.indexOf("http://")) {
        textDomen = fullURL.slice("http://".length);
    } else {
        textDomen = "URL адрес введен не верно!";
    }

    displayUrlElement.textContent = textDomen;
});

//---------Task 4
const urlTextTask4Input = document.querySelector("#userUrlTask4");
const displayUrlTask4Element = document.querySelector("#displayDomenTask4");

urlTextTask4Input.addEventListener("change", function () {

    const fullURL = urlTextTask4Input.value.toLowerCase();
    let textDomen = "";

    if (~fullURL.indexOf("://www.")) {
        textDomen = fullURL.slice(fullURL.indexOf("://www.") + 7);
    } else if (~fullURL.indexOf("://")) {
        textDomen = fullURL.slice(fullURL.indexOf("://") + 3);
    } else {
        textDomen = fullURL;
    }

    displayUrlTask4Element.textContent = textDomen;
});

//---------Task 5

// let validity = {
//     valid: false // Поле валидно
//     customError: false // Установленно специальное сообщение ошибки
//     patternMismatch: false // Значение не удовлетворяет шаблону, установленному в атрибуте pattern
//     rangeOverflow: false // Значение превосходит атрибут max
//     rangeUnderflow: true // Значение меньше атрибута min
//     stepMismatch: true // Значение не соответствует указаному шагу
//     tooLong: false // Значение слишком длинное
//     tooShort: false // Значение слишком короткое
//     typeMismatch: false // Значение не соответствует указаному атрибуту type
//     valueMissing: false // Отсутствует обязательное значение
// };

//---------Task 6
const symbolInput = document.querySelector("#symbolInput");
const displaySymbolCodeText = document.querySelector("#displaySymbolCode");
symbolInput.addEventListener("change", function () {
    const text = symbolInput.value;

    if(!text.length){
        return;
    }

    let firstCharCode = text.charCodeAt(0);
    displaySymbolCodeText.textContent = firstCharCode;
});