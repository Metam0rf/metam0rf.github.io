"use strict";
var isShadowSet = false;

//---------Task 1
var setTextColorBttn = document.getElementById("setRedText");
setTextColorBttn.addEventListener("click", setColorToElements);

function setColorToElements(){
    var elements;
    var color = "red";
    elements = document.querySelectorAll("p");
    elements.forEach(function (item) {
        item.style.color = color;
    });
};

//---------Task 2
var setImgShadowBttn = document.getElementById("setImgShadow");
setImgShadowBttn.addEventListener("click", setShadowToElements);

function setShadowToElements(){
    var elements, color = "black";
    var styleShadow = !isShadowSet ? "0 0 10px " + color : ""
    elements = document.querySelectorAll("img");
    elements.forEach(function (item) {
        item.style.boxShadow = styleShadow;
    })
    isShadowSet = !isShadowSet};

//---------Task 3
var setImgShadowBttn = document.getElementById("setImgShadow");
setImgShadowBttn.addEventListener("click", setShadowToElements);

function setShadowToElements(){
    var elements, color = "black";
    var styleShadow = !isShadowSet ? "0 0 10px " + color : ""
    elements = document.querySelectorAll("img");
    elements.forEach(function (item) {
        item.style.boxShadow = styleShadow;
    })
    isShadowSet = !isShadowSet};
