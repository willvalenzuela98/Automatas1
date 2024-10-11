// script.js
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const id = document.getElementById('id').value;
    const idiomas = document.getElementById('idiomas').value;

    console.log('Nombre:', nombre);
    console.log('Teléfono:', telefono);
    console.log('Correo:', correo);
    console.log('ID:', id);
    console.log('Idiomas:', idiomas);

    alert('Formulario enviado con éxito!');
});
