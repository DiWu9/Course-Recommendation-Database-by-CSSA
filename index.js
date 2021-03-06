// convenient learning pathway:
// Chapter 1-6, focusing on 2(HTML), 4(CSS), and 6(JS); if interested, Chapter 7-8(JS) when done with 1-6

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

// Chapter 7:
// 7.1: document (DOM), window (.open(), .location, .navigator), console; *async and *defer; handle third-party JS libraries
// 7.2: DOM structure, document (.documentElement, .childNodes, .prevSibling, .nextSibling, .parentNode,
//      .removeAttribute(), .nodeValue, .appendChild(), .insertBefore(), .removeChild(), .createElement(),
//      .createTextNode(), .cloneNode())
// *consider add machine learning when core features are done: CS229

// Chapter 8:
// 8.2/8.3: consider OOP: class Course

// Google Form: surveying on suggestions
// Excel: store and process course suggestions (pre-database)
// JavaScript: all underlying logic on web pages with format
// PHP: client - server - database communication
// MySQL: query to course feedback/suggestion database and return; put the scraped prerequisites to relational DBs
// web scraping: (periodically) obtain prerequisites of courses

// consider deletion if necessary
// shift to muse.union.edu around 1/4/21

const CONSTANTS = {
    prefixCollection: ["AAH", "ACC", "ADA", "AFR", "AMS", "AIS", "AMU", "ANT", "ARB", "AST", "ATH", "AVA", "BCH",
        "BIO", "BME", "CHM", "CHN", "MLT", "CLS", "CSC", "ECE", "ECO", "EGL", "ENS", "ESC", "FLM", "FPR", "FRN", "GEO",
        "GER", "GRK", "GSW", "HBR", "HEB", "HST", "IDM", "IMP", "ISC", "ITL", "JPN", "LAS", "LAT", "MER", "MLL",
        "MTH", "PHL", "PHY", "POR", "PSC", "PSY", "REL", "REE", "RUS", "SCH", "SMT", "SOC", "SRS", "SPN", "STA"],
    numberMin: 1,
    numberMax: 499,
    courseListing: "https://catalog.union.edu/content.php?catoid=21&navoid=883",
    messageCollection: ["在有生的瞬间能遇到你 竟花光所有运气", "向天空大声地呼唤说声我爱你 向那流浪的白云说声我想你",
        "原谅我这一生不羁放纵爱自由", "轻轻敲醒沉睡的心灵 慢慢张开你的眼睛", "来日纵使千千阙歌 飘于远方我路上",
        "把握生命里的每一分钟 全力以赴我们心中的梦", "阳光总在风雨后 乌云上有晴空", "我的未来不是梦 我的心跟着希望在动",
        "也许 全世界我也可以忘记 就是不愿意 失去你的消息", "浪奔 浪流 万里涛涛江水永不休"]
};

function displayMessage() {
    let lyrics = document.getElementById("lyrics");
    let collection = CONSTANTS.messageCollection;
    lyrics.innerHTML = collection[Math.floor(Math.random() * (collection.length))] + "<br><br>";
    lyrics.style.fontFamily = "sans-serif";
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

function loadPrefixCollection() {
    let prefixDataList = document.getElementById("prefix_collection");
    let prefix = '';
    let collection = CONSTANTS.prefixCollection;
    for(let index = 0; index < collection.length; index++) {
        prefix += '<option value="' + collection[index] + '"/>';
    }
    prefixDataList.innerHTML = prefix;
}

function validateCoursePrefix() {
    let prefixInput = document.getElementById("course_prefix_input");
    let invalidChar = !(inputTypeCheck(prefixInput, 97, 122)
        || inputTypeCheck(prefixInput, 65, 90));
    let invalidLen = prefixInput.value.length !== 3;
    let nonExistentPrefix = !CONSTANTS.prefixCollection.includes(prefixInput.value.toUpperCase());
    let prefixError = document.getElementById("prefix_error");
    if(invalidChar || invalidLen || nonExistentPrefix) {
        prefixInput.style.borderColor = "red";
        if(invalidChar) {
            prefixError.innerHTML = "请键入字母类字符";
        }
        else if(invalidLen) {
            prefixError.innerHTML = "前缀长需为3";
        }
        else { // nonExistentPrefix
            prefixError.innerHTML = `请输入合理的前缀,<a href="${CONSTANTS.courseListing}">点击</a>参考课程列表`;
        }
        prefixError.style.color = "red";
    }
    else{
        prefixInput.style.borderColor = "blue";
        prefixError.innerHTML = "";
    }
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

function validateCourseNumber() {
    let min = CONSTANTS.numberMin;
    let max = CONSTANTS.numberMax;
    let numberInput = document.getElementById("course_number_input");
    let invalidChar = !inputTypeCheck(numberInput, 48, 57);
    let invalidLen = numberInput.value.length !== 3;
    let numberInputParsed = parseInt(numberInput.value);
    let nonExistentNumber = numberInputParsed < min || numberInputParsed > max;
    let numberError = document.getElementById("number_error");
    if(invalidChar || invalidLen || nonExistentNumber){
        numberInput.style.borderColor = "red";
        if(invalidChar) {
            numberError.innerHTML = "请键入数字类字符";
        }
        else if(invalidLen) {
            numberError.innerHTML = "编号长需为3";
        }
        else { // nonExistentNumber
            numberError.innerHTML = `请输入合理的编号, 此数值最小为${min}, 且最大为${max}`;
        }
        numberError.style.color = "red";
    }
    else{
        numberInput.style.borderColor = "blue";
        numberError.innerHTML = "";
    }
}

// function loadProfessors

function validateProfessor() {

}

function loadAll() {
    loadPrefixCollection();
    loadNumberCollection();
    // loadProfessors();
}

function validateForm() {
    // should change to submitByEmail(): mailto in new page + modify the button to be a message
    // should call helpers
    let catalogForm = document.getElementsByTagName("form")[0];
    catalogForm.action.innerText = "https://www.google.com"; // example
    // change to query_results_zh.html
    // concatenate corresponding course prefix and number to direct to the catalog
    let coursePrefix = document.getElementById("course_prefix");
    let courseNumber = document.getElementById("course_number");
    let professor = document.getElementById("professor");
}
