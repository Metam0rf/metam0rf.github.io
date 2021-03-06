"use strict"

//---------Task 1
//--STEP 1
const groupHTML = `<div class="input-group"><input type="text">
                        <button>-</button>
                    </div>`;

const groupContainerElement = document.querySelector(".groupContainer");
const panelElement = document.querySelector(".panel");
const addNewGroupButton = document.querySelector("#addItem");

const removeGroup = (event) => {
    if(event.target.nodeName === "BUTTON"){
        event.stopPropagation();
        groupContainerElement.removeChild(event.target.parentNode);
    }
};
groupContainerElement.addEventListener("click", removeGroup);
const addNewGroup = () => {
    groupContainerElement.insertAdjacentHTML("beforeEnd", groupHTML);
};
addNewGroupButton.addEventListener("click", addNewGroup);

//--STEP 2
const totalTextarea = panelElement.querySelector("#totalText");
const combineButton = panelElement.querySelector(".combineButton");

const combine = () => {

    const combineOption = getCombineOption();

    let inputsArray = Array.from(
        panelElement.querySelectorAll("input[type='text']")
    );
    //STEP 4
    const isOkay = validateInputs(inputsArray);
    if(!isOkay){
        alert("Не все поля ввода заполнены !");
        return;
    }

    //--STEP 4
    const valuesArray = inputsArray.map((item) => item.value.trim())
        .filter((value) => value !== "");

    let combinedText = "";
    valuesArray.forEach((item, index) => {

        //STEP 3
        switch (combineOption){
            case "1": //Четные
                if(index%2 === 0) return;
                break;
            case "2": //Нечетные
                if(index%2 !== 0) return;
                break;
        }
        //--STEP 3
        combinedText += `${item} \n--&&--\n`;
    });
    totalTextarea.value = combinedText;
};

combineButton.addEventListener("click", combine);

//--STEP 3
const radioGrp = panelElement.querySelectorAll("input[name='combineOption']");
const getCombineOption = () => {

    return  Array.from(radioGrp).find((radio) => radio.checked).value;
};

//--STEP 4
const validateInputs = (inputsArray) => {

    inputsArray.forEach((inputDOM) => {
        inputDOM.classList.remove("isEmpty");
    });

    const emptyInputsArray= inputsArray.filter((inputDOM) => inputDOM.value.trim() === "");
    emptyInputsArray.forEach((inputDOM) => {
        inputDOM.classList.add("isEmpty");
    });

    return emptyInputsArray.length === 0;
};

//---------Task 2
const addListItemInput = document.querySelector("#addListItem");
const randomList = document.querySelector(".randomList");
const addItemInList = () => {
    const itemValue = addListItemInput.value.trim();
    const textOptionHTML = `<li>${itemValue}</li>`;
    randomList.insertAdjacentHTML("beforeEnd", textOptionHTML);
};
addListItemInput.addEventListener("change", addItemInList);

const clickListHandler= (e) => {
    if(e.target.nodeName === "LI"){
        e.target.classList.toggle("highlighted");
    }
};
randomList.addEventListener("click", clickListHandler);
