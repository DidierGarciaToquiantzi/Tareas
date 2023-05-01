function Obtener() {
    fetch("https://yesno.wtf/api")
    .then(function(response) {
      return response.json();
    })
    
    .then(function(json){
      console.log(json);
      let imagen = document.getElementById("imagen");
      imagen.src = json.image;
      let texto = documentgetElementById('contenedorTexto');
      texto.innerHTML = json.answer;
    });
  }
  
  let boton = document.getElementById('boton');
  boton.addEventListener('click', Obtener);