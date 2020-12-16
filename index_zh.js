const prefixCollection = ["AAH", "ACC", "ADA", "AFR", "AMS", "AIS", "AMU", "ANT", "ARB", "AST", "ATH", "AVA", "BCH",
    "BIO", "BME", "CHM", "CHN", "MLT", "CLS", "CSC", "ECE", "ECO", "EGL", "ENS", "ESC", "FLM", "FPR", "FRN", "GEO",
    "GER", "GRK", "GSW", "HBR", "HEB", "HST", "IDM", "IMP", "ISC", "ITL", "JPN", "LAS", "LAT", "MER", "MLL",
    "MTH", "PHL", "PHY", "POR", "PSC", "PSY", "REL", "REE", "RUS", "SCH", "SMT", "SOC", "SRS", "SPN", "STA"];
const numberMin = 0; // consider deletion
const numberMax = 499;
const courseListing = "https://catalog.union.edu/content.php?catoid=21&navoid=883";
const messageCollection = ["在有生的瞬间能遇到你 竟花光所有运气", "向天空大声地呼唤说声我爱你 向那流浪的白云说声我想你",
    "原谅我这一生不羁放纵爱自由", "轻轻敲醒沉睡的心灵 慢慢张开你的眼睛", "来日纵使千千阙歌 飘于远方我路上",
    "把握生命里的每一分钟 全力以赴我们心中的梦", "阳光总在风雨后 乌云上有晴空", "我的未来不是梦 我的心跟着希望在动",
    "也许 全世界我也可以忘记 就是不愿意 失去你的消息", "浪奔 浪流 万里涛涛江水永不休"];

function displayMessage() {
    let lyrics = document.getElementById("lyrics");
    lyrics.innerHTML = messageCollection[Math.floor(Math.random() * (messageCollection.length))] + "<br><br>";
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
            prefixError.innerHTML = "请键入字母类字符";
        }
        else if(invalidLen) {
            prefixError.innerHTML = "前缀长需为3";
        }
        else { // nonExistentPrefix
            prefixError.innerHTML = `请输入合理的前缀,<a href="${courseListing}">点击</a>参考课程列表`;
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
            numberError.innerHTML = "请键入数字类字符";
        }
        else if(invalidLen) {
            numberError.innerHTML = "编号长需为3";
        }
        else { // nonExistentNumber
            numberError.innerHTML = `请输入合理的编号, 此数值最大为${numberMax}`;
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
    let catalogForm = document.getElementsByTagName("form")[0];
    catalogForm.action.innerText = "https://www.google.com"; // example
    // change to query_results_zh.html
    // concatenate corresponding course prefix and number to direct to the catalog
    let coursePrefix = document.getElementById("course_prefix");
    let courseNumber = document.getElementById("course_number");
    let professor = document.getElementById("professor");
}
