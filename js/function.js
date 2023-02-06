/*
document.getElementById('boton').onclick = function () {
    console.log("capturamos el elemento click");
    document.getElementById('cambiar').innerHTML="texto cambiado por evento";
} 

document.addEventListener('click',function () {console.log("hola desde add");
document.getElementById('cambiar').innerHTML="Texto cambiado desde click";
    
})
*/
document.getElementById('boton').addEventListener('click',function(){
    console.log("hola desde add");
    document.getElementById('cambiar').innerHTML="Texto cambido por apretar el boton";
});

document.getElementById('boton_color').addEventListener('click',function(){
document.body.style.backgroundColor='#33fff3';
} );

document.getElementById('boton_quitar').addEventListener('click',function () {
    document.getElementById('cambiar').style.display='none';
});

const collection = document.getElementsByClassName('pruebas');
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor='red';
    
}


