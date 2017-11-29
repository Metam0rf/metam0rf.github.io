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

//---------Task 4
const setBackgroundToElement = document.querySelector(".gallery");
const eventElement = document.querySelector("#task4");
eventElement.addEventListener("click", (e) => {
    if(e.target.classList.contains("gallery--img")){
        setBackgroundToElement.style.backgroundImage = `url('${e.target.getAttribute("src")}')`;
        setBackgroundToElement.style.backgroundSize = "conain";
        setBackgroundToElement.style.backgroundRepeat = "no-repeat";
    }
});

//---------Task 5
const squareToMoveElement = document.querySelector("#squareToMove");
let moveBottomCounter = 1;
const DISTANCE_TO_MOVE = 100;
const animatePositionY = (element , distance) => {
    requestAnimationFrame(() => {
        element.style.transform = `translateY(${distance}px)`;
        moveBottomCounter += 1;
    })
};

squareToMoveElement.addEventListener("click", () => {
    animatePositionY(squareToMoveElement, DISTANCE_TO_MOVE * moveBottomCounter);
});

//---------Task 6
const STATUS_ARRAY = [0,1,2];
let currentStatus = 0;
const toggleElement = document.querySelector(".toggleButton");
const toggleBackground = document.querySelector(".toggleBackground");
const parentRect = toggleBackground.getBoundingClientRect();

const animatePositionX = (element , distance) => {
    requestAnimationFrame(() => {
        element.style.transform = `translateX(${distance}px)`;
        moveBottomCounter += 1;
    })
};

const setNextStatus = (e) => {
    currentStatus = (currentStatus + 1) === STATUS_ARRAY.length ? 0 : currentStatus + 1;
    let moveDistance = 0;
    if(currentStatus === 0){
        moveDistance = 0;
    } else {
        moveDistance = parentRect.width / 3 * currentStatus;
    }
    animatePositionX(e.target,moveDistance );
    console.log(currentStatus);
};

toggleElement.addEventListener("click", setNextStatus);
