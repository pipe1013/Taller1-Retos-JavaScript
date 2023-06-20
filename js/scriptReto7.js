window.onload = function() {
  const form = document.getElementById("myForm");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementsByClassName("close")[0];
  const terminosButton = document.getElementById("terminosButton");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      alert("Formulario válido. ¡Registro exitoso!");
      form.reset();
    }
  });

  closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });

  terminosButton.addEventListener("click", function() {
    modal.style.display = "block";
  });

  function validateForm() {
    const tipoDocumento = document.getElementById("tipoDocumento").value;
    const numDocumento = document.getElementById("numDocumento").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const aceptarTerminos = document.getElementById("aceptarTerminos").checked;

    if (tipoDocumento === "" || numDocumento === "" || nombre === "" || apellido === "" || fechaNacimiento === "" || correo === "" || password === "" || confirmPassword === "" || !aceptarTerminos) {
      alert("Todos los campos son obligatorios.");
      return false;
    }

    if (!/^\d{5,}$/.test(numDocumento)) {
      alert("El campo 'No. Documento' debe contener solo números y tener una longitud mínima de 5 caracteres.");
      return false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(nombre) || !/^[a-zA-Z0-9]+$/.test(apellido)) {
      alert("Los campos 'Nombre' y 'Apellido' solo deben contener caracteres alfanuméricos.");
      return false;
    }

    const today = new Date();
    const birthDate = new Date(fechaNacimiento);
    const minBirthDate = new Date("2002-01-01");

    if (birthDate > today) {
      alert("La fecha de nacimiento no puede ser posterior a la fecha actual.");
      return false;
    }

    if (birthDate > minBirthDate) {
      alert("Debe ser mayor de 18 años para registrarse.");
      return false;
    }

    if (!/\b[\w.-]+@misena\.edu\.co\b/.test(correo)) {
      alert("El campo 'Correo Electrónico' solo permite correos con el dominio @misena.edu.co.");
      return false;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,}/.test(password)) {
      alert("El campo 'Contraseña' debe contener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y tener una longitud mínima de 10 caracteres.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("La contraseña y su confirmación no coinciden.");
      return false;
    }

    return true;
  }
};
