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