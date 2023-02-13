// Curriculum Vitae para Presentar en Entrevistas de Trabajo

document.getElementById('boton').addEventListener('click', function () {
    document.getElementById("mensaje").innerHTML = "Algunos Datos Sobre Mi";

});

document.getElementById('boton_color').addEventListener('click', function () {
    document.body.style.backgroundColor = '#FF2D00';
});

document.getElementById('boton_default').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
});

alert("Este es mi Curriculum");