document.addEventListener('DOMContentLoaded', function () {
    mostrarVentana()
});

function mostrarVentana() {
    const sobremi = document.querySelector('#contenido_sobreMi')
    const resumen = document.querySelector('#contenido_resumen')
    const enlaces = document.querySelectorAll('.navegacion-principal a')

    enlaces.forEach((ind) => {
        ind.addEventListener('click', (event) => {
            event.preventDefault()

            sobremi.style.display = 'none'
            resumen.style.display = 'none'

            if (ind.classList.contains('sobremi')) {
                sobremi.style.display = 'block';
            } else if (ind.classList.contains('resumen')) {
                resumen.style.display = 'block';
            }
        }) 
    })
}