function searchButton(){
	let searchQuery = document.getElementById('searchQuery').value;
	window.open("https://www.google.com/search?q=" + searchQuery);
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("formularios");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let btnCalcular = document.getElementById("calcular");
let btnBorrar = document.getElementById("limpiar");
let btnVerCodigo = document.getElementById("code");
let nom = document.getElementById("nombre");
let apell = document.getElementById("apellido");
let hrs = document.getElementById("horas");
let pH = document.getElementById("pagoHora");
let descuento1 = document.getElementById("onp");
let descuento2 = document.getElementById("essalud");
let bon = document.getElementById("bonificacion");
let add = document.getElementById("adicional");
let pagoFinal = document.getElementById("pagoFinal");

btnCalcular.onclick = () => {
  let pagoHora = pH.value;
  let onp = descuento1.checked ? 0.13:0;
  let essalud = descuento2.checked ? 120.52:0;
  let bonificacion = bon.value;
  let horas = hrs.value;
  horas = parseInt(horas);
  let adicional = add.value;
  adicional = parseInt(adicional);
  let pago = pagoHora*horas;
  pago = pago - pago*onp - essalud + pago*bonificacion + adicional;
  pagoFinal.value = pago + " soles";
  // console.log(pago); para testear
}

btnBorrar.onclick = () => {
  nom.value = "";
  apell.value = "";
  descuento1.value = false;
  descuento2.value = false;
  add.value = "";
  pagoFinal.value = "0.00";
}

btnVerCodigo.onclick = () => {
  window.open("https://github.com/SunTzuxd/portfolio");
}