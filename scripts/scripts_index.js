function eliminarItems() {
    localStorage.removeItem("A");
    localStorage.removeItem("B");
    localStorage.removeItem("Turno");
    localStorage.removeItem("Ganador");
}

function combinacionesParaGanar(e) {
    var primero = document.getElementById("1");
    var segundo = document.getElementById("2");
    var tercero = document.getElementById("3");
    var cuarto = document.getElementById("4");
    var quinto = document.getElementById("5");
    var sexto = document.getElementById("6");
    var septimo = document.getElementById("7");
    var octavo = document.getElementById("8");
    var noveno = document.getElementById("9");
    if ((primero.textContent == segundo.textContent && segundo.textContent == tercero.textContent) ||
        (cuarto.textContent == quinto.textContent && quinto.textContent == sexto.textContent) ||
        (septimo.textContent == octavo.textContent && octavo.textContent == noveno.textContent) ||
        (primero.textContent == cuarto.textContent && cuarto.textContent == septimo.textContent) ||
        (segundo.textContent == quinto.textContent && quinto.textContent == octavo.textContent) ||
        (tercero.textContent == sexto.textContent && sexto.textContent == noveno.textContent) ||
        (primero.textContent == quinto.textContent && quinto.textContent == noveno.textContent) ||
        (tercero.textContent == quinto.textContent && quinto.textContent == septimo.textContent))
        localStorage.setItem("Ganador", e.key);
}

window.addEventListener("storage", e => {
    if (e.key != "Turno") {
        if (e.key == "A") {
            document.getElementById(e.newValue).textContent = "X";
            document.getElementById(e.newValue).className = "player-1";
        } else {
            document.getElementById(e.newValue).textContent = "O";
            document.getElementById(e.newValue).className = "player-2";
        }
        combinacionesParaGanar(e);
    }
});