// common function declaration
console.log('utility done')
function getInputFieldValueById(id){
    const inputMoney = document.getElementById(id).value;
    const inputMoneyNumber = parseFloat(inputMoney)
    return inputMoneyNumber;

}

// get the text filed value available balance and donate balance
function getTextFieldValueById (id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}


// history section function
