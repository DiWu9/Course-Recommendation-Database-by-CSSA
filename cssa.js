// intended learning pathway:
// Chapter 1, 2-3(HTML), 4-5(CSS), 6-8(JS), 14(SQL), 12-13(PHP), 10(Mobile Web Dev), 9(jQuery), 11(Node.js)
// inquire any chapter when have foundation questions, and stackoverflow always help
// handle vocabulary input, mapping to prefix
const prefixCollection = ["AAH", "ACC", "ADA", "AFR", "AMS", "AIS", "AMU", "ANT", "ARB", "AST", "ATH", "AVA",
"BCH", "BIO", "BME", "CHM", "CHN", "MLT", "CLS", "CSC", "ECE", "ECO", "EGL", "ENS", "ESC", "FLM", "FPR", "FRN",
"GEO", "GER", "GRK", "GSW", "HBR", "HEB", "HST", "IDM", "IMP", "ISC", "ITL", "JPN", "LAS", "LAT", "MER", "MLL",
"MTH", "PHL", "PHY", "POR", "PSC", "PSY", "REL", "REE", "RUS", "SCH", "SMT", "SOC", "SRS", "SPN", "STA"];
const numberMin = 0;
const numberMax = 499;
// need Object data structure?
// consider OOP: class Course (Chapter 8)
// Google Form: surveying on suggestions
// Excel: store and process course suggestions (pre-database)
// JavaScript: all underlying logic on web pages with format
// PHP: client - server - database communication
// MySQL: query to course feedback/suggestion database and return; put the scraped prerequisites to relational DBs
// web scraping: (periodically) obtain prerequisites of courses

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