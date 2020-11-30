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
    "Did you watch the soccer/basketball (.etc) match?", "Where to go (safely) for the winter break?"];

// document.writeln("" + Math.random());
// window.confirm("Do you think this is a test");

function displayMessage() {
    document.getElementById("message").innerHTML = messageCollection[Math.floor(
        Math.random() * (messageCollection.length))] + "<br>" + "<br>"
}

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
    if((!(inputTypeCheck(prefixInput, 97, 122) || inputTypeCheck(prefixInput, 65, 90)))
        || (prefixInput.value.length !== 3) || (!prefixCollection.includes(prefixInput.value.toUpperCase()))) {
        prefixInput.style.borderColor = "red";
    }
    else{
        prefixInput.style.borderColor = "blue";
    }
}

function validateCourseNumber() {
    let numberInput = document.getElementById("course_number_input");
    if((!inputTypeCheck(numberInput, 48, 57)) || (numberInput.value.length !== 3)
        || (parseInt(numberInput.value) > numberMax)){
        numberInput.style.borderColor = "red";
    }
    else{
        numberInput.style.borderColor = "blue";
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
