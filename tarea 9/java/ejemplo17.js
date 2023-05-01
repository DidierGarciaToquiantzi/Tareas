class Regalo{
    constructor(containerElement, regaloSrc, callbackAbierto) {
        this.containerElement = containerElement;
        this.abrirRegalo=this.abrirRegalo.bind(this);
        this.callbackAbierto = callbackAbierto;
        this.regaloSrc = regaloSrc;
        this.image=document.createElement('img');
        this.image.src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
        this.image.addEventListener('click',this.abrirRegalo);
        this.containerElement.appendChild(this.image);
    }

    abrirRegalo(event) {
        this.image.src=this.regaloSrc;
        this.image.removeEventListener('click', this.abrirRegalo);
        this.callbackAbierto();
    }
}

class Aplicacion {
  constructor(contenedorRegalo, contenedorTitulo){
    this.contenedorRegalo = contenedorRegalo;
    this.contenedorTitulo = contenedorTitulo;
    
    this.regaloAbierto = this.regaloAbierto.bind(this);
    this.regalos = [];
    this.cargarContenedorRegalo();
  }
  
  cargarContenedorRegalo() {
    for (const enlace of REGALOS_ENLACES) {
      const regalo = new Regalo(this.contenedorRegalo, enlace, this.regaloAbierto);
      this.regalos.push(regalo);
    }
  }
  
  regaloAbierto() {
    this.regalosAbiertos++;
    if (this.regalosAbiertos === this.regalos.length) {
      this.contenedorTitulo.textContent = 'Disfruta tus regalos';
    }
  }
}

const REGALOS_ENLACES = [
  'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif',
  'https://media.giphy.com/media/LEcRaYyUptIxG/giphy.gif',
  'https://media.giphy.com/media/3BBv1D4AFbJkY/giphy.gif',
  'https://media.giphy.com/media/13smkcXZiTLDgc/giphy.gif',
  'https://media.giphy.com/media/GknfGjiYhsFQk/giphy.gif'
];

const contenedorRegalo = document.querySelector('#regalo');
const contenedorTitulo = document.querySelector('#titulo');
const app = new Aplicacion(contenedorRegalo, contenedorTitulo);