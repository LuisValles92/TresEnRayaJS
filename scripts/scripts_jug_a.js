function eliminarItems() {
    localStorage.removeItem("A");
    localStorage.removeItem("B");
    localStorage.removeItem("Turno");
    localStorage.removeItem("Ganador");
}

function finDePartida() {
    if (document.getElementById("select_A").childElementCount == 1 && document.getElementById("ganador_A").textContent.length == 0) {
        document.getElementById("ganador_A").textContent = "Fin de la partida: Empate";
        document.getElementById("select_A").disabled = true;
        document.getElementById("marcar_A").disabled = true;
    }
}

window.addEventListener("storage", e => {
    if (e.newValue != "A" && e.newValue != "B")
        document.getElementById("select_A").removeChild(document.getElementById(e.newValue));
    if (localStorage.getItem("Ganador") != null) {
        document.getElementById("ganador_A").textContent = "Fin de la partida: El ganador es el jugador " + localStorage.getItem("Ganador");
        document.getElementById("select_A").disabled = true;
        document.getElementById("marcar_A").disabled = true;
    }
    finDePartida();
});

function setProperty() {
    if (localStorage.getItem("Turno") != "A") {
        var indice_seleccionado = document.getElementById("select_A").selectedIndex;
        if (indice_seleccionado == 0)
            alert("Seleccione una posición");
        else {
            var option = document.getElementById("select_A").options.item(indice_seleccionado);
            localStorage.setItem("Turno", "A");
            localStorage.setItem("A", option.value);
            document.getElementById("select_A").options.remove(indice_seleccionado);
        }
    } else alert("No es su turno");
    finDePartida();
}
