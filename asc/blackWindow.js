function modoOscuro() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('modo', 'oscuro');
    } else {
        localStorage.setItem('modo', 'claro');
    }

    var icono = document.querySelector('.icono-flex i');

    if (icono.classList.contains('bxs-moon')) {
        icono.classList.remove('bxs-moon');
        icono.classList.add('bxs-sun');
    } else {
        icono.classList.remove('bxs-sun');
        icono.classList.add('bxs-moon');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var icono = document.querySelector('.icono-flex i');
    var modoGuardado = localStorage.getItem('modo');
    if (modoGuardado === 'oscuro') {
        document.body.classList.add('dark-mode');
        icono.classList.remove('bxs-moon');
        icono.classList.add('bxs-sun');
    }
});