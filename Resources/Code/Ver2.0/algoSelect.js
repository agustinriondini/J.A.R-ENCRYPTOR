function changeAlgo() {
    var selectElement = document.getElementById("algoSelector");
    var selectedValue = selectElement.value;

    localStorage.setItem("chosenAlgo", selectedValue);

    var cambioDeAlgoritmo = document.createElement("script");
    cambioDeAlgoritmo.type = "text/javascript";

    switch (selectedValue) {
        case "winkers_algo":
            cambioDeAlgoritmo.src = "./Resources/Code/Ver2.0/winkers.js";
            break;
        case "darks_algo":
            cambioDeAlgoritmo.src = "./Resources/Code/Ver2.0/darks.js";
            break;
        default:
            cambioDeAlgoritmo.src = "./Resources/Code/Ver2.0/kernel.js";
            break;
    }

    document.head.appendChild(cambioDeAlgoritmo);
}

window.onload = function () {
    var storedValue = localStorage.getItem("chosenAlgo");
    if (storedValue) {
        var selectElement = document.getElementById("algoSelector");
        selectElement.value = storedValue;
    }
    changeAlgo();
};
