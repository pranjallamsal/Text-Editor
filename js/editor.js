const resetBtn = document.querySelector(".reset-text");
const boldBtn = document.querySelector(".bold-text");
const italicsBtn = document.querySelector(".italic-text");
const underlineBtn = document.querySelector(".underline-text");
const textArea = document.querySelector(".editor");

function resetText() {
    textArea.value = "";
}

function boldText() {
    const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);
    const newText = "<b>" + selectedText + "</b>";
    textArea.value = textArea.value.substring(0, textArea.selectionStart) + newText + textArea.value.substring(textArea.selectionEnd);
}

resetBtn.addEventListener("click", resetText);
boldBtn.addEventListener("click", boldText);