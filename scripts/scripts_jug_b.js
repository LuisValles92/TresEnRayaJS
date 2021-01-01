function eliminarItems() {
    localStorage.removeItem("A");
    localStorage.removeItem("B");
    localStorage.removeItem("Turno");
    localStorage.removeItem("Ganador");
}

function finDePartida() {
    if (document.getElementById("select_B").childElementCount == 1 && document.getElementById("ganador_B").textContent.length == 0) {
        document.getElementById("ganador_B").textContent = "Fin de la partida: Empate";
        document.getElementById("select_B").disabled = true;
        document.getElementById("marcar_B").disabled = true;
    }
}

window.addEventListener("storage", e => {
    if (e.newValue != "A" && e.newValue != "B")
        document.getElementById("select_B").removeChild(document.getElementById(e.newValue));
    if (localStorage.getItem("Ganador") != null) {
        document.getElementById("ganador_B").textContent = "Fin de la partida: El ganador es el jugador " + localStorage.getItem("Ganador");
        document.getElementById("select_B").disabled = true;
        document.getElementById("marcar_B").disabled = true;
    }
    finDePartida();
});

function setProperty() {
    if (localStorage.getItem("Turno") != "B") {
        var indice_seleccionado = document.getElementById("select_B").selectedIndex;
        if (indice_seleccionado == 0)
            alert("Seleccione un posición");
        else {
            var option = document.getElementById("select_B").options.item(indice_seleccionado);
            localStorage.setItem("Turno", "B");
            localStorage.setItem("B", option.value);
            document.getElementById("select_B").options.remove(indice_seleccionado);
        }
    } else alert("No es su turno");
    finDePartida();
}