function calculate() {
    var word = document.getElementById("wordInput").value;
    var option = prompt("Ingrese una opción:\n1. Longitud de la palabra\n2. Palabra en mayúsculas\n3. Palabra en minúsculas\n4. Primer carácter de la palabra");

    switch (option) {
        case "1":
            alert("Longitud de la palabra: " + word.length);
            break;
        case "2":
            alert("Palabra en mayúsculas: " + word.toUpperCase());
            break;
        case "3":
            alert("Palabra en minúsculas: " + word.toLowerCase());
            break;
        case "4":
            alert("Primer carácter de la palabra: " + word.charAt(0));
            break;
        default:
            alert("Opción inválida");
            break;
    }
}
