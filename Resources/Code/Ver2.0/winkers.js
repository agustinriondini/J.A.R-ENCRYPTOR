function runProgram() {
    var textContainer = document.getElementById('textContainer');
    var inputText = document.getElementById('inputText');
    var outputText = document.getElementById('outputText');
    var runBtn = document.getElementById('run_btn');

    if (!textContainer.classList.contains('encripted')) {
        var texto = inputText.value;
        var letraPalabraMap = {
            'a': '/05/',
            'e': 'misky',
            'i': 'wisk',
            'o': 'michimichi',
            'u': 'miau',
            'b': '00x0',
            'c': '0x00',
            'd': 'ksiw',
            'f': 'ihcimihcim',
            'g': 'uaim',
            'h': '0x0',
            'j': '02',
            'k': 'miauuaim',
            'l': 'c0x3',
            'm': '0x0x0',
            'n': '850',
            'p': 'ksiwwisk',
            'q': 'ihcimihcimwisk',
            'r': '1994/',
            's': '0xq0',
            't': 'polo0c',
            'v': 'simn',
            'w': 'malte0ss5',
            'x': 'emma',
            'y': 'mAlte0ss5',
            'z': 'Malte0ss5'
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
