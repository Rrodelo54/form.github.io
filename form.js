//funcion generadora de colores de fondo
function setRandomBackgroundColor() {
    // Generar valores aleatorios para los componentes rojo, verde y azul de un color RGB
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  
    // Crear una cadena con el valor RGB aleatorio
    var randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  
    // Establecer el color de fondo del body con el valor RGB aleatorio
    document.body.style.backgroundColor = randomColor;
};

//funcion de limpieza de campos
function limpiarCampos() {
    document.getElementById("name").value = "";
    document.getElementById("gmail").value = "";
    document.getElementById("coment").value = "";
};



var submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function() {
    //guardar el body y el input name en var
  var body = document.querySelector("body");
  var commentInput = document.getElementById("name");
  //valor de name
  var commentValue = commentInput.value;
  //ejecutar cambio de color de fondo al body
  setRandomBackgroundColor();
  //se ejecuta alerta.
  setTimeout(function() {
    alert("Hola " + commentValue + ", he recibido tu comentario");
  }, 500);
  //regreso al body a su estado original
  setTimeout(function() {
    body.style.backgroundColor = "white";
  }, 1000);

  //limpiamos campos de textos
  limpiarCampos();
});
