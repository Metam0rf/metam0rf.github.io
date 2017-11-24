"use strict";

//---------Task 1
const textDisplayElementTask1 = document.querySelector("#textDisplayerTask1");
const trackElement = document.querySelector(".mouseMovementTracker");

const mousemoveEventHandler = (e) => {
    const axisX = e.offsetX;
    const axisY = e.offsetY;
    textDisplayElementTask1.textContent = `Координаты указателя: ${axisX} - ${axisY}`;
};
trackElement.addEventListener("mousemove", mousemoveEventHandler);

//---------Task 2
const folderImageElement = document.querySelector(".folderImage");

const dblclickEventHandler = () => {
    if(folderImageElement.getAttribute('data-folder-status') === "closed"){
        folderImageElement.setAttribute('data-folder-status', 'opened');
    } else {
        folderImageElement.setAttribute('data-folder-status', 'closed');
    }

};

folderImageElement.addEventListener("dblclick", dblclickEventHandler);

//---------Task 3
const parentDiv = document.querySelector("#task3");

const onMouseEventHandler = e => {
    if (e.target.classList.contains("square")) {
        e.target.classList.toggle("rounded");
    }
};
parentDiv.addEventListener("mouseover", onMouseEventHandler);
parentDiv.addEventListener("mouseout", onMouseEventHandler);

const NUMBER_OF_DIVES = 307;
(() => {
    let DOMArray = [];
    for(let i =0; i <= NUMBER_OF_DIVES; i++){
        let divElement = document.createElement("div");
        divElement.classList.add("square");
        DOMArray.push(divElement);
    }
    parentDiv.append(...DOMArray);
})();