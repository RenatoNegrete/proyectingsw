// Seleccionar todos los botones de aceptar
const botonesAceptar = document.querySelectorAll('.aceptar-btn');

botonesAceptar.forEach(boton => {
    boton.addEventListener('click', function() {
        // Obtener el ID del emprendimiento de la URL del botón
        const idEmprendimiento = this.getAttribute('data-id');
        // Enviar una solicitud POST al servidor para aceptar el emprendimiento
        fetch(`/aceptar/${idEmprendimiento}`, {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Ocultar el emprendimiento aceptado
                this.parentElement.style.display = 'none';
                // Mostrar un mensaje de éxito
                alert('El emprendimiento ha sido aceptado exitosamente.');
            } else {
                // Mostrar un mensaje de error si la solicitud falla
                alert('Ha ocurrido un error al aceptar el emprendimiento.');
            }
        })
        .catch(error => {
            console.error('Error al procesar la solicitud:', error);
            // Mostrar un mensaje de error si la solicitud falla
            alert('Ha ocurrido un error al aceptar el emprendimiento.');
        });
    });
});

$(document).ready(function() {
    // Manejar clic en el enlace de aceptar
    $(".aceptar").on("click", function(e) {
        e.preventDefault();
        const idEmprendimiento = $(this).data("id");
        const $li = $(this).closest("li"); // Obtener el elemento <li> que contiene el enlace
        $.ajax({
            url: `/aceptar/${idEmprendimiento}`,
            type: "POST",
            success: function(response) {
                console.log("Emprendimiento aceptado:", response);
                // Ocultar el emprendimiento aceptado
                $li.hide();
            },
            error: function(xhr, status, error) {
                console.error("Error al aceptar el emprendimiento:", error);
                // Aquí puedes manejar errores si es necesario
            }
        });
    });

    // Manejar clic en el enlace de rechazar
    $(".rechazar").on("click", function(e) {
        e.preventDefault();
        const idEmprendimiento = $(this).data("id");
        const $li = $(this).closest("li"); // Obtener el elemento <li> que contiene el enlace
        $.ajax({
            url: `/rechazar/${idEmprendimiento}`, // Ruta para rechazar el emprendimiento
            type: "POST",
            success: function(response) {
                console.log("Emprendimiento rechazado:", response);
                // Ocultar el emprendimiento rechazado
                $li.hide();
            },
            error: function(xhr, status, error) {
                console.error("Error al rechazar el emprendimiento:", error);
                // Aquí puedes manejar errores si es necesario
            }
        });
    });
});