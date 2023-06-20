document.getElementById("myButton").addEventListener("click", function() {
  alert("¡Haz hecho clic en el botón!");
});

document.getElementById("myInput").addEventListener("keydown", function() {
  console.log("Se ha presionado una tecla en el input");
});

document.getElementById("myDiv").addEventListener("mouseover", function() {
  this.style.backgroundColor = "yellow";
});
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  console.log("Formulario enviado");
});

document.getElementById("myElement").addEventListener("mouseenter", function() {
  this.style.backgroundColor = "lightblue";
});

document.getElementById("mySelect").addEventListener("change", function() {
  var selectedOption = this.value;
  console.log("Opción seleccionada: " + selectedOption);
});
window.addEventListener("load", function() {
  console.log("La página ha terminado de cargar");
});

document.getElementById("myImage").addEventListener("load", function() {
  console.log("La imagen se ha cargado");
});

document.getElementById("myScrollDiv").addEventListener("scroll", function() {
  console.log("Se ha realizado un desplazamiento");
});

document.getElementById("myButton").addEventListener("dblclick", function() {
  console.log("Se ha realizado un doble clic en el botón");
});

