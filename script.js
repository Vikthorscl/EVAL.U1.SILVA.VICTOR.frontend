
// Función para cambiar entre los modos día y noche
function toggleMode() {
    var body = document.body;
    body.classList.toggle('dark-mode'); // Agregar o quitar la clase 'dark-mode' del body

    // Cambiar el texto del botón según el modo actual
    var themeToggleBtn = document.getElementById('themeToggleBtn');
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Modo Día';
    } else {
        themeToggleBtn.textContent = 'Modo Noche';
    }
}

// Validaciones del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener valores de los campos
    var fullName = document.getElementById('fullName').value;
    var service = document.getElementById('service').value;
    var message = document.getElementById('message').value;

    // Validar que todos los campos estén completos
    if (!fullName || !service || !message) {
        console.log("Por favor complete todos los campos.");
        return;
    }

    // Mostrar los datos del formulario en la consola
    console.log("Nombre completo:", fullName);
    console.log("Servicio:", service);
    console.log("Mensaje:", message);

    // Aquí podrías enviar los datos a un servidor o realizar otras acciones
});
