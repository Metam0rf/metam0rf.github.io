"use strict"

//---------Task 1
var setTextColorBttn = document.getElementById("setRedText");
setTextColorBttn.addEventListener("click", setColorToElements);

function setColorToElements(){
    var elements, color = "red";
    elements = document.querySelectorAll("p");
    elements.forEach(function (item) {
        item.style.color = color;
    });
};

//---------Task 2
var setImgShadowBttn = document.getElementById("setImgShadow");
setImgShadowBttn.addEventListener("click", setShadowToElements);

function setShadowToElements(color){
    var styleShadow = "box-shadow: 3,3, black";
    var elements, color = "red";
    elements = document.querySelectorAll("p");
    elements.forEach(function (item) {
        item.style.color = color;
    });
};
