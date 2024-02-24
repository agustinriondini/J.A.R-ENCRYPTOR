function runProgram() {
    var textContainer = document.getElementById('textContainer');
    var inputText = document.getElementById('inputText');
    var outputText = document.getElementById('outputText');
    var runBtn = document.getElementById('run_btn');

    if (!textContainer.classList.contains('encripted')) {
        // Lógica de encriptación
        var texto = inputText.value;
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

        outputText.value = textoCifrado;

        // Cambiar el texto del botón a "Desencriptar"
        runBtn.textContent = 'Desencriptar';
    } else {
        // Deshacer la encriptación
        outputText.value = '';
        // Cambiar el texto del botón a "Encriptar"
        runBtn.textContent = 'Encriptar';
    }

    // Alternar la clase para aplicar la rotación
    textContainer.classList.toggle('encripted');
}
function copyText() {
    var outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    var toClipboard = document.getElementById('toClipboard');

    document.execCommand('copy');
    toClipboard.textContent = '¡Copiado!';

    setTimeout (function(){
        toClipboard.textContent = 'Copiar';
        }, 2000);
}
function wipeData(){
    var textContent = document.getElementById("inputText");
    var resetButton = document.getElementById("reset_btn");
    
    textContent.value = "";
    resetButton.innerText = "Listo!";
    setTimeout(function(){
        resetButton.innerText = "Borrar";
    }, 500);
}
