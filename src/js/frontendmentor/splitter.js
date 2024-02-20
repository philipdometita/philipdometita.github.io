let bill = 0;
let tip = -1; // use -1 since 0 tip is allowed
let numPeople = 0;
let formFilled = false;
let tipPer = 0;
let totalPer = 0;

const tipPerEl = document.getElementById("tip-per-result");
const totalPerEl = document.getElementById("total-per-result");

/**
 * checkes if form is filled and calculates amounts if it is.
 * 
 */
const checkFormFilled = () => {
    formFilled = (bill > 0) && (tip >= 0) && (numPeople > 0);
    if (formFilled) {
        tipPer = (bill * tip) / numPeople;
        tipPerEl.innerHTML = `$${tipPer.toFixed(2)}`;
        totalPer = (bill + (bill * tip)) / numPeople;
        totalPerEl.innerHTML = `$${totalPer.toFixed(2)}`;
    }
}

/**
 * checks if the reset button should be active.
 * @returns boolean if any input has a value inside it
 */
const checkResetActive = () => {
    return (bill > 0) || (tip >= 0) || (numPeople >= 0);
}


const billInput = document.getElementById("bill");
/**
 *  gets bill input value and updates reset button 
 */
const getBill = () => {
    if (billInput.value.length !== 0) {
        bill = parseFloat(billInput.value);
        activateResetBtn();
    } else {
        bill = 0;
    }
    
    if (!checkResetActive()) {
        deactivateResetBtn();
    }
} 

/**
 * updates bill to follow 2 decimal format for currencies such as CAD, USD, etc.
 */
const updateBill = () => {
    if (billInput.value.length !== 0) {
        billInput.value = bill.toFixed(2);
    }
}

billInput.addEventListener("input", getBill);
billInput.addEventListener("blur", updateBill);

const tipInputDiv = document.getElementById("tip-inputs");
const tipCustomInput = document.getElementById("tip-custom");

let tipCustom = false;

/**
 *  checks radio buttons for tip amounts
 *  resets custom tip if it exists
 */
let checkedR;
const getTip = e => {
    if (e.target.type === "radio") {
        checkedR = e.target;
        tip = parseFloat(e.target.value) / 100;
        activateResetBtn();
        if (tipCustom) {
            tipCustomInput.value = "";
            tipCustom = false;
        }
    }   
}

tipInputDiv.addEventListener("click", e => getTip(e));

/**
 *  checks custom tip input and unchecks radio button if one
 *  is selected
 */
const getTipCustom = () => {
    if (tipCustomInput.value.length !== 0) {
        tip = parseFloat(tipCustomInput.value) / 100;
        if (checkedR) checkedR.checked = false;
        tipCustom = true;
        activateResetBtn();
    } else {
        tip = -1;
        tipCustom = false;
    }
    if (!checkResetActive()) {
        deactivateResetBtn();
    }

}

tipCustomInput.addEventListener("input", getTipCustom);


const numPeopleInput = document.getElementById("num-people");
const numPeopleLabel = document.getElementById("num-people-label");

/**
 * checks number of people input and displays error if 0 is entered.
 */
const getNumPeople = () => {
    if (numPeopleInput.value.length !== 0) {
        numPeople = parseFloat(numPeopleInput.value);
        activateResetBtn()
        if (numPeople === 0) {
            numPeopleLabel.classList.add("error");
        } else {
            numPeopleLabel.classList.remove("error");
        }
    } else {
        numPeople = 0;
    }
    if (!checkResetActive()) {
        deactivateResetBtn();
    }
}

/**
 * updates number of people input so that whole numbers are displayed
 */
const updateNumPeople = () => {
    if (numPeopleInput.value.length !== 0) {
        numPeopleInput.value = numPeople.toFixed(0);
    }
}

numPeopleInput.addEventListener("input", getNumPeople);
numPeopleInput.addEventListener("blur", updateNumPeople);

const resetButton = document.getElementById("reset-btn");
const activateResetBtn = () => {
    resetButton.classList.add("active");
    checkFormFilled()
}

const deactivateResetBtn = () => {
    resetButton.classList.remove("active");
}

/**
 * reset function for the reset button to use
 */
const resetSplitter = () => {
    billInput.value = "";
    bill = 0;

    numPeopleInput.value = "";
    numPeople = 0;
    numPeopleLabel.classList.remove("error");

    if (tipCustom) {
        tipCustomInput.value = "";
    } else {
        if (checkedR) checkedR.checked = false;
    }
    tip = -1;

    tipPerEl.innerHTML = "$0.00";
    totalPerEl.innerHTML = "$0.00";
    tipPer = 0;
    totalPer = 0;
}

resetButton.addEventListener("click", resetSplitter)
