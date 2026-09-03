// Fetching Filter Submit Button
let filterSubmitButton = document.getElementById('FilterSubmitButton');
// Fetching Filter Reset Button
let filterResetButton = document.getElementById('FilterResetButton');

// Defining the classnme of hiding elements
const HIDE_REQUIRED_ELEMENT = `HideElement`;
const FILTER_ITEMS = document.getElementsByClassName('FilterItems');


function DisableElementDisplay(elementId) {
    let elementFound = document.getElementById(elementId);
    // Adding HideElement class to the element
    elementFound.classList.add(HIDE_REQUIRED_ELEMENT);    
}

function ApplyFilterAction() {
    // Iterating through all of it's elements
    for (let index = 0; index < FILTER_ITEMS.length; index++) {
        // checking if the filter elemenet is disable or not
        if (eachFilterElement.checked)
        {
            continue;
        }
        else {
            DisableElementDisplay(eachFilterElement.value);
        }
    }
}

function ResetElementState(elementId) {
    console.log(`ElementID: ${elementId}`)
    let elementFound = document.getElementById(elementId);
    // Removing the HideElement class from the element
    elementFound.classList.remove(HIDE_REQUIRED_ELEMENT);
}

function ResetFilterAction() {
    // Fetching all the filter items
    for (let index = 0; index < FILTER_ITEMS.length; index++) {
        const eachFilterElement = FILTER_ITEMS[index];
        // Assigning the state of input as checked
        eachFilterElement.checked = true;
        // Reseting the elements display state
        ResetElementState(eachFilterElement.value);
    }
}

// Adding Event Listener to Submit Button
document.getElementById('FilterSubmitButton').addEventListener("click", ApplyFilterAction);
// Adding Event Listener to Reset Button
document.getElementById('FilterResetButton').addEventListener('click', ResetFilterAction);