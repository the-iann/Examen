document.getElementById("submit").addEventListener("click", function(event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();
    // Obtener los valores de email y contraseña
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // Si se ingresan valores de email y contraseña (puedes agregar más validaciones si es necesario)
    if (email && password) {
        // Abrir el enlace al video
        window.open("https://youtu.be/4Lsbg4tq9-Q", "_blank");
    } else {
        alert("Por favor, ingrese su email y contraseña.");
    }
});