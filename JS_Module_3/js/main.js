"use strict";

var array = [1, 2, 3, "q", "w", "qw"];

var displayTextElement = document.querySelector("#new");
var indexInput = document.querySelector("#index");
var valueInput = document.querySelector("#value");
var displayBttn = document.querySelector("#displayBttn");

var allBttns = document.querySelectorAll("p>button");

allBttns.forEach(function (item) {
    item.addEventListener("click",arrayHandler);
});

displayBttn.addEventListener("click", displayArray);

function displayArray() {
    displayTextElement.textContent = array;
}

function arrayHandler(e){

    var operationName = e.target.id;

    var argArray = []; //массив передаваемых аргументов для вставки в массив
    if (operationName === "push" || operationName === "unshift"){
        argArray = [valueInput.value];
    } else if(operationName === "splice"){
        argArray = [
            parseInt(indexInput.value),
            0,
            valueInput.value
        ];
    }

    array[operationName].apply(array,argArray);
}
