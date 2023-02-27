

function encriptar() {
  document.getElementById("p__sinmensajes_id--encriptador").style.display = "none";
    var mensaje = document.getElementById("mensaje");
    var textoEncriptado = "";
  
    // Verifica si el campo de entrada tiene un valor
    var frase = document.getElementById("textoEncriptado").value.trim().toLowerCase();
    if (frase !== "") {
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
  