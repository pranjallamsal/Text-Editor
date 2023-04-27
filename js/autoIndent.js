function autoIndent(textarea) {
    textarea.addEventListener('keydown', event => {
        const isEnter = event.which === 13;
        const isTab = event.which === 9;
        if (isEnter || isTab) {
            event.preventDefault();
            const { selectionStart, value } = textarea;
            const insertion = isEnter
                ? '\n' + (value.slice(0, selectionStart).match(/(?:^|[\r\n])((?:(?=[^\r\n])[\s])*?)\S[^\r\n]*\s*$/) || [0, ''])[1]
                : '\t';
            textarea.value = value.slice(0, selectionStart) + insertion + value.slice(selectionStart);
            textarea.selectionEnd = textarea.selectionStart = selectionStart + insertion.length;
            textarea.scrollTop += textarea.clientHeight / textarea.rows;
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    autoIndent(textArea);
});