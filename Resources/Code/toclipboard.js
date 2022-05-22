
/*/funcion desactivada, boton de entrada removido de index.html

function myFunction() {
    var copyText = document.getElementById("#outputtext");
    copyText.select("");
    navigator.clipboard.writeText(copyText.value);
    alert("Copiado al portapapeles");
  }