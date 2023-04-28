const resetBtn = document.querySelector(".reset-text");
const openTagBtn = document.querySelector(".open-tag");
const selfCloseTagBtn = document.querySelector(".self-close-tag");
const commentLine = document.querySelector(".comment-line");
const textArea = document.querySelector(".editor");

function resetText() {
    textArea.value = "";
}

function setTag() {
    const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);
    const newText = "<" + selectedText + ">" + "</" + selectedText + ">";
    textArea.value = textArea.value.substring(0, textArea.selectionStart) + newText + textArea.value.substring(textArea.selectionEnd);
}

function selfCloseTag() {
    const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);
    const newText = "<" + selectedText + " />";
    textArea.value = textArea.value.substring(0, textArea.selectionStart) + newText + textArea.value.substring(textArea.selectionEnd);
}

function commentLn() {
    const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);
    const newText = "<!-- " + selectedText + " -->";
    textArea.value = textArea.value.substring(0, textArea.selectionStart) + newText + textArea.value.substring(textArea.selectionEnd);
}

resetBtn.addEventListener("click", resetText);
openTagBtn.addEventListener("click", setTag);
selfCloseTagBtn.addEventListener("click", selfCloseTag);
commentLine.addEventListener("click", commentLn);