function changeHeading(style){
    let selectedText = window.getSelection();

    if (selectedText.rangeCount) {           
        let e = document.createElement(style.value);
        e.innerHTML = selectedText.toString();

        let range = selectedText.getRangeAt(0);
        range.deleteContents();
        range.insertNode(e);
    }
}