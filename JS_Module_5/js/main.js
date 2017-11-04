"use strict";

//---------Task 1
const textInputTask1 = document.querySelector("#userText");
textInputTask1.addEventListener("change", function (e) {
    const textDisplayElement = document.querySelector("#displayText1");
    textDisplayElement.textContent = textInputTask1.value.length;
});
