class Regalo{
    constructor(containerElement, regaloSrc) {
        this.containerElement = containerElement;
        this.abrirRegalo=this.abrirRegalo.bind(this);
        this.regaloSrc = regaloSrc;
        this.image=document.createElement('img');
        this.image.src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
        this.image.addEventListener('click',this.abrirRegalo);
        this.containerElement.appendChild(this.image);
    }

    abrirRegalo(event) {
        this.image.src=this.regaloSrc;
        this.image.removeEventListener('click', this.abrirRegalo);
    }
}

class Aplicacion {
  constructor(contenedorRegalo, contenedorTitulo){
    this.contenedorRegalo = contenedorRegalo;
    this.contenedorTitulo = contenedorTitulo;
    this.regalos = [];
    this.cargarContenedorRegalo();
  }
  
  cargarContenedorRegalo() {
    for (const enlace of REGALOS_ENLACES) {
      const regalo = new Regalo(this.contenedorRegalo, enlace);
      this.regalos.push(regalo);
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