function loadPrefixCollection() {
    let prefixDataList = document.getElementById("prefix_collection");
    let prefix = '';
    let collection = CONSTANTS.prefixCollection;
    for(let index = 0; index < collection.length; index++) {
        prefix += '<option value="' + collection[index] + '"/>';
    }
    prefixDataList.innerHTML = prefix;
}

function loadNumberCollection() {
    let numberDataList = document.getElementById("number_collection");
    let number = '';
    let min = CONSTANTS.numberMin;
    let max = CONSTANTS.numberMax;
    let numberMaxLength = max.toString().length;
    for(let number = min; number < max; number++) {
        let numberString = number.toString();
        let leadingZeroCount = numberMaxLength - numberString.length;
        let processedNumber = '';
        for(let count = 0; count < leadingZeroCount; count++) {
            processedNumber += '0';
        }
        processedNumber += numberString;
        number += '<option value="' + processedNumber + '"/>';
    }
    numberDataList.innerHTML = number;
}

// function loadProfessors

function loadAll() {
    loadPrefixCollection();
    loadNumberCollection();
    // loadProfessors();
}

function submitByEmail() {
    // mailto in a new page
    // modify the button to be a message
}