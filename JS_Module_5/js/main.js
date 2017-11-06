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

function CustomValidation() { }

CustomValidation.prototype = {
    // Установим пустой массив сообщений об ошибках
    invalidities: [],

    // Метод, проверяющий валидность
    checkValidity: function(input) {

        const validity = input.validity;

        // удалим пробелы в конце и начале инпутов
        input.value = input.value.trim();

        if (validity.valueMissing) {
            this.addInvalidity('Відсутній обов\'язковий символ');
        }

        if (validity.tooShort) {
            let minLength = input.getAttribute('minlength');
            this.addInvalidity('Поле має містити не менше ' + minLength + ' символів');
        }

        // И остальные проверки валидности...

        // А тут специальные
        if (input.getAttribute('name') === "email") {
            if (~input.value.indexOf(" ")) {
                this.addInvalidity('email не повинен мати пробілів');
            }
            if(input.value.split("@", 3).length > 2){
                this.addInvalidity('email має містити один символ "@"');
            }
        }
    },

    // Добавляем сообщение об ошибке в массив ошибок
    addInvalidity: function(message) {
        this.invalidities.push(message);
    },

    // Получаем общий текст сообщений об ошибках
    getInvalidities: function() {
        return this.invalidities.join('. \n');
    }
};

CustomValidation.prototype.getInvaliditiesForHTML = function() {
    return this.invalidities.join('. <br>');
};

const form = document.forms[0];
form.addEventListener("submit", function (event) {

    let stopSubmit = false;

    for(let i=0; i < event.currentTarget.elements.length; i++){
        if(form.elements[i].tagName = "input"){
            stopSubmit = validate(form.elements[i]);
        }
    }

    if (stopSubmit) {
        event.preventDefault();
    }

});

for(let i=0; i < form.elements.length; i++){
    if(form.elements[i].tagName = "input"){
        form.elements[i].addEventListener("change", CustomValidation);
    }
}

function validate(input) {

    let isCorrect = true;

    // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
    if (input.checkValidity() == false) {
        let inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
        inputCustomValidation.checkValidity(input); // Выявим ошибки
        let customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
        input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке
        // Добавим ошибки в документ
        // var customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
        // input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')
        isCorrect = false;
    }

    return isCorrect;
}


//---------Task 6
const symbolInput = document.querySelector("#symbolInput");
const displaySymbolCodeText = document.querySelector("#displaySymbolCode");
symbolInput.addEventListener("change", function () {
    const text = symbolInput.value;

    if(!text.length){
        return;
    }

    displaySymbolCodeText.textContent =  text.charCodeAt(0);
});