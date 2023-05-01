function abrirRegalo() {
    const image = document.querySelector('img');
    image.src = 'giphy.gif';
    image.removeEventListener('click', abrirRegalo);
    const mensaje = document.querySelector('h1');
    mensaje.textContent = 'Felicidades'
}

const image = document.querySelector('img');
image.addEventListener('click', abrirRegalo);

