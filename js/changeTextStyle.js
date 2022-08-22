function changeTextStyle(style) {
    let selectedText = window.getSelection();   
    
    if (selectedText.rangeCount) {     
        let e = document.createElement('span');
        e.classList.add(style.value);
        e.innerHTML = selectedText.toString();
        
        let range = selectedText.getRangeAt(0);
        range.deleteContents();
        range.insertNode(e);
    }
}