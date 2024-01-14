function runProgram() {
    var textContainer = document.getElementById('textContainer');
    var inputText = document.getElementById('inputText');
    var outputText = document.getElementById('outputText');
    var runBtn = document.getElementById('run_btn');

    if (!textContainer.classList.contains('encripted')) {
        var texto = inputText.value;
        var letraPalabraMap = {
            'a': 'cskks00',
            'e': '18/0',
            'i': 'C0X230X',
            'o': 'x230xc0',
            'u': 'X230xC0',
            'b': '230XcX0',
            'c': '0000000',
            'd': '0000001',
            'f': '1000000',
            'g': '0100000',
            'h': '1010x10',
            'j': '10001c1',
            'k': 's50s1s0',
            'l': '9s9s9s9',
            'm': 's9s9s9s',
            'n': 'c0x1010',
            'p': 'c20s021',
            'q': '20cs120',
            'r': '1/2018',
            's': '21c20s1',
            't': 's21c202',
            'v': '8s0x0s0',
            'w': 's00s00s',
            'x': '000s000',
            'y': 'vbws500',
            'z': '500scws',
        };
        var textoCifrado = texto.split('').map(function (letra) {
            return letraPalabraMap.hasOwnProperty(letra.toLowerCase()) ? letraPalabraMap[letra.toLowerCase()] : letra;
        }).join('');

        outputText.value = textoCifrado;
        runBtn.textContent = 'Desencriptar';
    } else {
        outputText.value = '';
        runBtn.textContent = 'Encriptar';
    }
    textContainer.classList.toggle('encripted');
}
