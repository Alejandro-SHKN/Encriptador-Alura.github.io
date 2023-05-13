

function encriptar() {

    var mensaje = document.getElementById("mensaje");
    var textoEncriptado = "";
  
    // Verifica si el campo de entrada tiene un valor
    var frase = document.getElementById("textoEncriptado").value.trim().toLowerCase();
    if (frase !== "") {
        document.getElementById("p__sinmensajes_id--encriptador").style.display = "none";
      textoEncriptado = frase.replace(/e/img, "enter")
        .replace(/o/img, "ober")
        .replace(/i/img, "imes")
        .replace(/a/img, "ai")
        .replace(/u/img, "ufat");
  
      document.getElementById("textoDesencriptado").value = textoEncriptado;
  
      // Muestra el mensaje
      mensaje.innerHTML = "Se ha encriptado el texto!";
      mensaje.style.display = "block";
  
      // Oculta el mensaje después de 3 segundos
      setTimeout(function() {
        mensaje.style.display = "none";
      }, 5000);
    }
  }
  

  function desencriptar() {
    var mensaje = document.getElementById("mensaje");
    var textoDesencriptado = "";
  
    // Verifica si el campo de entrada tiene un valor
    var frase = document.getElementById("textoDesencriptado").value.trim().toLowerCase();
    if (frase !== "") {
      textoDesencriptado = frase.replace(/enter/img, "e")
        .replace(/ober/img, "o")
        .replace(/imes/img, "i")
        .replace(/ai/img, "a")
        .replace(/ufat/img, "u");
  
        document.getElementById("textoDesencriptado").value = textoDesencriptado;


  
      // Muestra el mensaje
      mensaje.innerHTML = "Texto Desencriptado!";
      mensaje.style.display = "block";
  
      // Oculta el mensaje después de 3 segundos
      setTimeout(function() {
        mensaje.style.display = "none";
      }, 5000);
    }
  }
  
  function copiar() {
    var mensaje = document.getElementById("mensaje");
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
  
    // Corta el contenido del textarea y copia al portapapeles
    navigator.clipboard.writeText(contenido.value);
  
    // Muestra el mensaje si hay texto en el textarea
    if (contenido.value.trim() !== "") {
      mensaje.innerHTML = "Se ha copiado el texto!";
      mensaje.style.display = "block";
  
      // Oculta el mensaje después de 3 segundos
      setTimeout(function() {
        mensaje.style.display = "none";
      }, 5000);
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
  
  imgCambiarFondo.addEventListener('click', function () {
    if (parrafoModoColor.textContent == `Tema Claro`) {
      parrafoModoColor.style.zIndex = `-1`
      colorFondo.style.backgroundColor = 'rgb(67, 67, 67)';
      parrafoModoColor.style.color = `white`
      parrafoModoColor.style.marginRight = `30px`
      imgCambiarFondo.style.opacity = 0;
      botonCopiar.style.borderColor = `white`
      setTimeout(() => {
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
      
    } else {
      imgCambiarFondo.style.opacity = 0; 
      colorFondo.style.backgroundColor = 'rgb(251, 254, 255)';
      parrafoModoColor.style.color = `black`
      botonCopiar.style.borderColor = `#0A3871`
      botonDesencriptar.style.borderColor = `#0A3871`
      setTimeout(() => {
        parrafoModoColor.style.marginRight = `20px`
        parrafoModoColor.style.opacity = 1;
        parrafoAlerta.style.color = `black`
        parrafoModoColor.style.marginLeft = `0px`
        parrafoModoColor.textContent = `Tema Claro`;
        logoAluraBlanco.style.opacity = 0;
        imgCambiarFondo.src = `https://i.postimg.cc/hPfp542g/sun-1.png`
        imgCambiarFondo.style.opacity = 1;
        imgCambiarFondo.style.backgroundColor =`rgb(255, 236, 116)`;
        botonEncriptar.style.borderColor = `#0A3871`
        botonDesencriptar.style.backgroundColor = `white`
      }, 500);
      setTimeout(() => {
      parrafoModoColor.style.opacity = 0;
        
      }, 1400);
    }
  });
  