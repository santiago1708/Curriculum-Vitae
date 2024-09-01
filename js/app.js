document.addEventListener('DOMContentLoaded', function () {
    mostrarVentana()
});

function mostrarVentana() {
    const sobremi = document.querySelector('#contenido_sobreMi')
    const resumen = document.querySelector('#contenido_resumen')
    const enlaces = document.querySelectorAll('.navegacion-principal a')
    mostrarContenidoInicial();
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (event) => {
            event.preventDefault();

            sobremi.style.display = 'none';
            resumen.style.display = 'none';
            enlaces.forEach(link => link.classList.remove('active'));
            enlace.classList.add('active');
            if (enlace.classList.contains('sobremi')) {
                sobremi.style.display = 'block';
            } else if (enlace.classList.contains('resumen')) {
                resumen.style.display = 'block';
            }
        });
    });
}

function mostrarContenidoInicial() {
    const sobremi = document.querySelector('#contenido_sobreMi')
    const resumen = document.querySelector('#contenido_resumen')
    const enlaces = document.querySelectorAll('.navegacion-principal a')

    sobremi.style.display = 'block';
    resumen.style.display = 'none';
    enlaces.forEach(enlace => {
        if (enlace.classList.contains('sobremi')) {
            enlace.classList.add('active');
        } else {
            enlace.classList.remove('active');
        }
    });
}