function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId){
    const textElement   = document.getElementById(elementId);
    const textElmentValueString =   textElement.innerText;
    const textElementValue  = parseFloat(textElmentValueString);
    textElement.value = '';
    return textElementValue;
}

function setTextElemenValuetById (elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;


}
