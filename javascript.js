function encriptar() {
  let fondoBinario = document.getElementById(`ID-img__FondoBinario`);
  let textarea = document.getElementById(`textoDesencriptado`)
  var mensajeAlerta = document.getElementById(`p__sinmensajes_id--encriptador`);
  var mensaje = document.getElementById("mensaje");
  // var textoEncriptado = "aña";
  
  // Verifica si el campo de entrada tiene un valor
  var frase = document.getElementById("textoEncriptado").value.trim().toLowerCase();
  if (frase !== "") {
    textarea.style.opacity = `0`;
    fondoBinario.style.transform = `scale(1.2)`
    fondoBinario.style.opacity = 1;
    setTimeout(() => {
      textoEncriptado = frase.replace(/e/img, "enter")
      .replace(/o/img, "ober")
      .replace(/i/img, "imes")
      .replace(/a/img, "ai")
      .replace(/u/img, "ufat");
      document.getElementById("textoDesencriptado").value = textoEncriptado;
      
    }, 1000);
    mensajeAlerta.textContent = `Encriptando mensaje...`;
    
    setTimeout(() => {
      textarea.style.opacity = `1`;
      mensajeAlerta.style.color = `#0A3871`
      mensajeAlerta.textContent = `¡Mensaje encriptado!`;
      fondoBinario.style.opacity = 0;
      fondoBinario.style.transform = `scale(1)`
      
      
    }, 1200);
    
    
    
  }
}


function desencriptar() {
  let fondoBinario = document.getElementById(`ID-img__FondoBinario`);
  let textarea = document.getElementById(`textoDesencriptado`)
  var mensaje = document.getElementById("mensaje");
  var mensajeAlerta = document.getElementById(`p__sinmensajes_id--encriptador`);
  var mensaje = document.getElementById("mensaje");
  var textoDesencriptado = "";
  
  // Verifica si el campo de entrada tiene un valor
  var frase = document.getElementById("textoDesencriptado").value.trim().toLowerCase();
  if (frase !== "") {
    
    fondoBinario.style.transform = `scale(1.2)`
    fondoBinario.style.opacity = 1
    mensajeAlerta.textContent = `Desencriptando mensaje...`
    textarea.style.opacity = 0;
    
    setTimeout(() => {
      textoDesencriptado = frase.replace(/enter/img, "e")
      .replace(/ober/img, "o")
      .replace(/imes/img, "i")
      .replace(/ai/img, "a")
      .replace(/ufat/img, "u");
      fondoBinario.style.transform = `scale(1)`
      mensajeAlerta.textContent = `¡Mensaje desencriptado!`
      textarea.style.opacity = 1;
      document.getElementById("textoDesencriptado").value = textoDesencriptado;
      fondoBinario.style.opacity = 0;
    }, 1200);
    
    
    
    // Muestra el mensaje
    // mensajeAlerta.textContent = `¡Mensaje desencriptado!`;
    mensajeAlerta.style.color = `black`
    // mensaje.innerHTML = "Texto Desencriptado!";
    // mensaje.style.display = "block";
    
    // Oculta el mensaje después de 3 segundos
    setTimeout(function() {
      mensaje.style.display = "none";
    }, 5000);
  }
}
let inputValue = document.getElementById(`textoEncriptado`);

function copiar() {
  var mensajeAlerta = document.getElementById(`p__sinmensajes_id--encriptador`);
  var mensaje = document.getElementById("mensaje");
  var contenido = document.querySelector("#textoDesencriptado");
  contenido.select();
  
  // Corta el contenido del textarea y copia al portapapeles
  navigator.clipboard.writeText(contenido.value);
  if(contenido.value !== ``){ 
  mensajeAlerta.style.color = `rgb(58, 147, 255)`
  mensajeAlerta.textContent = `¡Mensaje copiado!`;
  }
}

let colorFondo = document.querySelector('.colorFondoBody');
let logoAluraBlanco = document.getElementById(`ID-img__vector-headerBlanco`);
let divImgCambiarFondo = document.getElementById('ID-div__containerImgCambiarColor');
let parrafoModoColor = document.getElementById(`ID-p__modoColor`);
let imgCambiarFondo = document.getElementById('ID-img__cambiarColor');
let parrafoAlerta = document.getElementById(`ID-p__condicion-encriptador`);
// Declaracion de los botones
let botonEncriptar = document.getElementById(`botonEncriptado`);
let botonDesencriptar = document.getElementById(`botonDesencriptado`)
let botonCopiar = document.getElementById(`botonCopiar`)
//Declaracion de la imagen para borrar el input 
let imgBorrar = document.getElementById(`ID-img__borrar`);

imgCambiarFondo.addEventListener('click', function () {
  if (parrafoModoColor.textContent == `Tema Claro`) {
    parrafoModoColor.style.zIndex = `-1`
    colorFondo.style.backgroundColor = 'rgb(67, 67, 67)';
    parrafoModoColor.style.color = `white`
    parrafoModoColor.style.marginRight = `30px`
    parrafoModoColor.style.top = `40px`
    imgCambiarFondo.style.opacity = 0;
    imgCambiarFondo.style.marginBottom = `63px`
    botonCopiar.style.borderColor = `white`
    setTimeout(() => {
      imgBorrar.style.backgroundColor = `white`
      parrafoModoColor.style.opacity = 1;
      parrafoAlerta.style.color = `white`
      parrafoModoColor.style.marginRight = `3px`
      parrafoModoColor.textContent = `Tema Oscuro`;
      logoAluraBlanco.style.opacity = 2;
      imgCambiarFondo.src = `https://i.postimg.cc/3xYpqm5P/crescent-moon.png`
      imgCambiarFondo.style.opacity = 1;
      imgCambiarFondo.style.backgroundColor =`rgb(69 82 84)`;
      botonEncriptar.style.borderColor = `white`
      botonDesencriptar.style.borderColor = `rgb(25, 113, 255)`
      // botonDesencriptar.style.backgroundColor = `#99d9f9`
      botonDesencriptar.style.color = `#0A3991`
      botonCopiar.style.borderColor = `rgb(25, 113, 255)`
    }, 500);
    setTimeout(() => {
      parrafoModoColor.style.opacity = 0;
    }, 1400);
    setTimeout(() => {
      parrafoModoColor.style.marginRight = `0px`
      
    }, 2300);
    
  } else {
    imgCambiarFondo.style.opacity = 0; 
    colorFondo.style.backgroundColor = 'rgb(251, 254, 255)';
    parrafoModoColor.style.color = `black`
    botonCopiar.style.borderColor = `#0A3871`
    botonDesencriptar.style.borderColor = `#0A3871`
    parrafoModoColor.style.top = `5px`
    imgCambiarFondo.style.marginBottom = `0px`
    setTimeout(() => {
      imgBorrar.style.backgroundColor = `#d0d0d0`
      parrafoModoColor.style.marginRight = `0px`
      parrafoModoColor.style.opacity = 1;
      parrafoAlerta.style.color = `black`
      parrafoModoColor.style.marginRight = `10px`
      parrafoModoColor.textContent = `Tema Claro`;
      logoAluraBlanco.style.opacity = 0;
      imgCambiarFondo.src = `https://i.postimg.cc/Y0JLZ07C/brightness-and-contrast.png`
      imgCambiarFondo.style.opacity = 1;
      imgCambiarFondo.style.backgroundColor =`rgb(255, 236, 116)`;
      botonEncriptar.style.borderColor = `#0A3871`
      botonDesencriptar.style.backgroundColor = `white`
    }, 500);
    setTimeout(() => {
      parrafoModoColor.style.opacity = 0;
      // parrafoModoColor.style.marginRight = `0px`
    }, 1400);
  }
});

// Declaracion de el boton y contenido del input  
imgBorrar.addEventListener(`click`, function () {
  let inputValue = document.getElementById(`textoEncriptado`);
  let mensajeDesencriptador = document.getElementById(`textoDesencriptado`);
  var mensajeAlerta = document.getElementById(`p__sinmensajes_id--encriptador`);
  mensajeAlerta.textContent = `Ningun mensaje fué encontrado`
  mensajeAlerta.style.color = `black`
  mensajeDesencriptador.value = ``
  inputValue.value = ``
})
