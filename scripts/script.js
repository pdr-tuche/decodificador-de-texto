function encript(string) {
  string = string.replace(/e/g, "enter");
  string = string.replace(/i/g, "imes");
  string = string.replace(/a/g, "ai");
  string = string.replace(/o/g, "ober");
  string = string.replace(/u/g, "ufat");

  return string;
}

function decript(string) {
  string = string.replace(/enter/g, "e");
  string = string.replace(/imes/g, "i");
  string = string.replace(/ai/g, "a");
  string = string.replace(/ober/g, "o");
  string = string.replace(/ufat/g, "u");

  return string;
}

function encriptHandle() {
  var texto = document.getElementById("texto").value;
  var textoEncriptado = encript(texto);
  document.getElementById("texto").value = "";
  document.getElementById("titulo-resultado").innerHTML = "Texto Encriptado";
  document.getElementById("texto-decodificado").innerHTML = textoEncriptado;
  document.getElementById("copiar").hidden = false;
}

function decriptHandle() {
  var texto = document.getElementById("texto").value;
  texto = decript(texto);
  document.getElementById("titulo-resultado").innerHTML = "Texto Decriptado";
  document.getElementById("texto-decodificado").innerHTML = texto;
  document.getElementById("copiar").hidden = false;
}

function copy() {
  var texto = document.getElementById("texto-decodificado").innerHTML;
  navigator.clipboard.writeText(texto);
  alert("Texto copiado para a área de transferência");
}
