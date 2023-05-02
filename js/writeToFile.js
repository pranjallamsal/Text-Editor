const writeBtn = document.querySelector('.write-to-file');

writeBtn.addEventListener("click", () => {
    const content = textArea.value;
    const fileName = document.querySelector('.fName').value.trim();
    if (fileName === "") fileName = 'index.html';
    const blob = new Blob([content], { type: 'text/html' });
    const link = document.createElement('a');
    link.download = fileName;
    link.href = URL.createObjectURL(blob);
    link.click();
});