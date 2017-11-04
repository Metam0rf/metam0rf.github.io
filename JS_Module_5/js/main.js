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
displayImagesBttn.addEventListener("click", function (e) {
    for(let i=0; i<arrayOfImgPathes.length; i++){
        let newImg = document.createElement("img");
        newImg.setAttribute("src","assets/img/" + arrayOfImgPathes[i] + ".jpg");
        displayImagesBttn.parentNode.appendChild(newImg);
    }
});
