function onclickBefore() {
    let selectorWord = document.getElementById('word_selector');
    let inputText = document.getElementById('text_input');
    let radioButtonBefore = document.getElementById('before_radio_button');
    let selectorStyle = document.getElementById('text_style_selector');
    
    var selectorValue = selectorStyle[selectorStyle.selectedIndex].value;
    var div = document.createElement('div');
    div.style.cssText = selectorValue;
    span.textContent = selectorWord[selectorWord.selectedIndex].value;

    if (radioButtonBefore.checked) {
        inputText.insertAdjacentElement('beforebegin', span);
    } else {
        inputText.insertAdjacentElement('afterend', span);
    }
}

function addToSelect() {
    let selectorWord = document.getElementById('word_selector');
    let inputText = document.getElementById('text_input');
    var selectorLength = document.getElementById("word_selector").length -1;
    var opt = document.createElement("option");
    opt.text = inputText.value;
    selectorWord.add(opt, selectorWord.options[1]);
}