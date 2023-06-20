document.getElementById("checkBtn").addEventListener("click", function() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var actividad = document.getElementById("actividad").value;

  var datosCorrectos = false;

  if (
    (nombre === "opcion1" && apellido === "opcion2" && actividad === "opcion4") ||
    (nombre === "opcion2" && apellido === "opcion4" && actividad === "opcion2") ||
    (nombre === "opcion3" && apellido === "opcion5" && actividad === "opcion1") ||
    (nombre === "opcion4" && apellido === "opcion1" && actividad === "opcion3") ||
    (nombre === "opcion5" && apellido === "opcion3" && actividad === "opcion5")
  ) {
    datosCorrectos = true;
  }

  if (datosCorrectos) {
    alert("Los datos son correctos");
  } else {
    alert("Los datos son incorrectos");
  }
});
