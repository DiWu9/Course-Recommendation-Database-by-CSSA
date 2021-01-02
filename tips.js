function trimLineBreak(text) {
    let currentPos = 0;
    let textLength = text.length;
    while(currentPos < textLength) {
        currentPos = text.find("\r");

    }
}


let theThirdTip = document.getElementById("tip_three");
let theFourthTip = document.getElementById("tip_four");
document.write(theThirdTip);
document.write(theFourthTip);
// try document.querySelector("...")
// let listing = document.getElementById("course_listing");
// let directory = document.getElementById("directory");
document.getElementById("tip_four").innerHTML = "";
// let theFourthTipText = theFourthTip.innerHTML;
// document.write(theFourthTipText.find("\n"));
