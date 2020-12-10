// intended learning pathway:
// Chapter 1, 2-3(HTML), 4-5(CSS), 6-8(JS), 14(SQL), 12-13(PHP), 10(Mobile Web Dev), 9(jQuery), 11(Node.js)
// inquire any chapter when have foundation questions, and stackoverflow always help
// handle vocabulary input, mapping to prefix

// Chapter 6:
// 6.7: need Object data structure? (Actually have been using it all the time)
// 6.8: use template literal? (relating PHP?)
// 6.9: consider add Date object: record each suggest request and pass to the db
// 6.10: machine learning math: pi, e, log(x), ln(x), etc., especially Math.random() for sampling
// 6.11: add/replace on some functions of form validation, if necessary; compare CSS modification and Exception handling
// 7.1: document (DOM), window (.open(), .location, .navigator), console; *async and *defer; handle third-party JS libraries
// 7.2: DOM structure
// *consider add machine learning when core features are done: CS229

// Chapter 8:
// 8.2/8.3: consider OOP: class Course

// Google Form: surveying on suggestions
// Excel: store and process course suggestions (pre-database)
// JavaScript: all underlying logic on web pages with format
// PHP: client - server - database communication
// MySQL: query to course feedback/suggestion database and return; put the scraped prerequisites to relational DBs
// web scraping: (periodically) obtain prerequisites of courses
const prefixCollection = ["AAH", "ACC", "ADA", "AFR", "AMS", "AIS", "AMU", "ANT", "ARB", "AST", "ATH", "AVA",
"BCH", "BIO", "BME", "CHM", "CHN", "MLT", "CLS", "CSC", "ECE", "ECO", "EGL", "ENS", "ESC", "FLM", "FPR", "FRN",
"GEO", "GER", "GRK", "GSW", "HBR", "HEB", "HST", "IDM", "IMP", "ISC", "ITL", "JPN", "LAS", "LAT", "MER", "MLL",
"MTH", "PHL", "PHY", "POR", "PSC", "PSY", "REL", "REE", "RUS", "SCH", "SMT", "SOC", "SRS", "SPN", "STA"];
const numberMin = 0;
const numberMax = 499;
const messageCollection = ["How are classes going this term?", "What is a good one for breakfast/lunch/dinner?",
    "Did you watch the soccer/basketball (.etc) match?", "Where to go (safely) for the winter break?",
    "What is the weather like today?"];

// document.writeln("" + Math.random());
// window.confirm("Do you think this is a test");

function displayMessage() {
    let greeting = document.getElementById("greeting");
    greeting.innerHTML = messageCollection[Math.floor(Math.random() * (messageCollection.length))] + "<br><br>";
    greeting.style.fontFamily = "sans-serif";
}

// show the error message if an input meets a case
// #1: confirm the location to display error message (done)
// #2: determine priority (?) of error message

function inputTypeCheck(input, charStart, charEnd) {
    let typeCorrect = true;
    let inputIndex = 0;
    while((typeCorrect) && (inputIndex < input.value.length)) {
        if((charStart > input.value.charCodeAt(inputIndex)) || (input.value.charCodeAt(inputIndex) > charEnd)) {
            typeCorrect = false;
        }
        else{
            inputIndex++;
        }
    }
    return typeCorrect;
}

function validateCoursePrefix() {
    let prefixInput = document.getElementById("course_prefix_input");
    let invalidChar = !(inputTypeCheck(prefixInput, 97, 122)
        || inputTypeCheck(prefixInput, 65, 90));
    let invalidLen = prefixInput.value.length !== 3;
    let nonExistentPrefix = !prefixCollection.includes(prefixInput.value.toUpperCase());
    let prefixError = document.getElementById("course_prefix_error");
    if(invalidChar || invalidLen || nonExistentPrefix) {
        prefixInput.style.borderColor = "red";
        if(invalidChar) {
            prefixError.innerHTML = "There is at least one character being not alphabetical";
        }
        else if(invalidLen) {
            prefixError.innerHTML = "The length of input is not three";
        }
        else { // nonExistentPrefix
            prefixError.innerHTML = "The prefix does not exist. Please refer to the Union course catalog.";
        }
        prefixError.style.color = "red";
    }
    else{
        prefixInput.style.borderColor = "blue";
        prefixError.innerHTML = "";
    }
}

function validateCourseNumber() {
    let numberInput = document.getElementById("course_number_input");
    let invalidChar = !inputTypeCheck(numberInput, 48, 57);
    let invalidLen = numberInput.value.length !== 3;
    let nonExistentNumber = parseInt(numberInput.value) > numberMax;
    let numberError = document.getElementById("course_number_error");
    if(invalidChar || invalidLen || nonExistentNumber){
        numberInput.style.borderColor = "red";
        if(invalidChar) {
            numberError.innerHTML = "There is at least one character being not numeric";
        }
        else if(invalidLen) {
            numberError.innerHTML = "The length of input is not three";
        }
        else { // nonExistentNumber
            numberError.innerHTML = `The number does not exist. The minimum is ${numberMin}
             and the maximum is ${numberMax}.`;
        }
        numberError.style.color = "red";
    }
    else{
        numberInput.style.borderColor = "blue";
        numberError.innerHTML = "";
    }
}

function validateProfessor() {

}

function validateForm() {
    // should call helpers
    // Chapter 6 & 7
    let catalogForm = document.getElementsByTagName("form")[0];
    catalogForm.action.innerText = "https://www.google.com"; // example
    // concatenate corresponding course prefix and number to direct to the catalog
    let coursePrefix = document.getElementById("course_prefix");
    let courseNumber = document.getElementById("course_number");
    let professor = document.getElementById("professor");
}

// toggle error message(s) below the suggest button
// let prefixAlert = document.getElementById("course_prefix_alert");
// prefixAlert.value = "the input length is not 3"; // change the data structure
// prefixAlert.value = "the input length is 3";
