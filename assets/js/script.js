const textArea = document.querySelector('#input-textarea');
const message = document.querySelector('.message');
const output = document.querySelector('.output');
const outputText = document.querySelector('.output-text');
const criptografarButton = document.querySelector('#crip-button');
const descriptografarButton = document.querySelector('#decrip-button');
const copiarButton = document.querySelector('#copy-button');


function criptografar() {
    let text = textArea.value;

    if (text.trim() == '') {
        output.style.display = 'none';
        message.style.display = 'block';
    } else {
        text = text.replaceAll('e', 'enter')
        text = text.replaceAll('i', 'imes')
        text = text.replaceAll('a', 'ai')
        text = text.replaceAll('o', 'ober')
        text = text.replaceAll('u', 'ufat')

        message.style.display = 'none';
        output.style.display = 'block';

        outputText.innerHTML = text;
    }
}


function descriptografar() {
    let text = textArea.value;

    if (text.trim() == '') {
        output.style.display = 'none';
        message.style.display = 'block';
    } else {
        text = text.replaceAll('ufat', 'u')
        text = text.replaceAll('ober', 'o')
        text = text.replaceAll('ai', 'a')
        text = text.replaceAll('imes', 'i')
        text = text.replaceAll('enter', 'e')

        message.style.display = 'none';
        output.style.display = 'block';
        
        outputText.innerHTML = text;
    }
}


function copyText() {
    let output = outputText.innerHTML;
    navigator.clipboard.writeText(output);
}

output.style.display = 'none';


criptografarButton.onclick = criptografar;
descriptografarButton.onclick = descriptografar;
copiarButton.onclick = copyText;
