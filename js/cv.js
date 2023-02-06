

async function capturarDatos(){
    const response = await fetch('https://randomuser.me/api/');
    const datos=await response.json();

    document.getElementById('nombre').innerHTML=datos.results[0.].name.first;//nombre
    document.getElementById('foto_cv').innerHTML="<img class='imagen_datos' src='"+datos.results[0.].picture.large+"'>";
    document.getElementById('apellido').innerHTML=datos.results[0.].name.last;//apellido
    document.getElementById('edad').innerHTML=datos.results[0.].dob.age;//edad
    const fecha=datos.results[0.].dob.date;
    const fecha3=formato_fecha(fecha);
    document.getElementById('natalicio').innerHTML=fecha3;//cumpleaños
    document.getElementById('genero').innerHTML=datos.results[0.].gender;//genero

    document.getElementById('calle').innerHTML=datos.results[0.].location.street.name;//calle
    document.getElementById('numero').innerHTML=datos.results[0.].location.street.number;//numero
    document.getElementById('cp').innerHTML=datos.results[0.].location.postcode;//codigo postal
    document.getElementById('ciudad').innerHTML=datos.results[0.].location.city;//cuidad
      
    //primera fila de datos academicos
    //document.getElementById('institucion1').innerHTML=datos.results[0.].location.state;//
    //document.getElementById('certificacion1').innerHTML=datos.results[0.].location.country;
    //document.getElementById('duracion1').innerHTML=datos.results[0.].dob.age+" horas";
    
    const inst =datos.results[0.].location.state;
    const cert =datos.results[0.].location.country;
    const dur =datos.results[0.].dob.age;
    //document.getElementsById('institucion').innerHTML=inst;
    //document.getElementById('institucion1').innerHTML=inst;
    //document.getElementById('institucion1').innerHTML=inst;


    const collection = document.getElementsByClassName('institucion');
        for (let i = 0; i < collection.length; i++) {
        collection[i].innerHTML = inst;
        }   

        const certificacion = document.getElementsByClassName('certificacion');
        for (let j = 0; j < certificacion.length; j++) {
        certificacion[j].innerHTML = cert;
        }   

        const collection3 = document.getElementsByClassName('duracion');
        for (let i = 0; i < collection3.length; i++) {
        collection3[i].innerHTML = dur;
        }   




 console.log(datos.results[0.].location.city);//ciudad
 console.log(datos.results[0.].location.state);//estado provincia
 console.log(datos.results[0.].location.country);//pais
 console.log(datos.results[0.].location.postcode);//codigo postal
 console.log(datos.results[0.].picture.large);
 
//img id="foto_cv" src=
 
 //console.log(json.info);
 //const datos2=JSON.parse(datos);
//gender
/*
for (let index = 0; index < datos.length; index++) {
    const element = datos[index];
    console.log(element);
    
 }    
name
location
email
login
registered
dob
phone
cell
id
picture
nat*/
 //const json = await response.text();
 //console.log(json);
 //const datos=console.log(json);
/* console.log("fecha original");
 console.log(fecha);
 console.log("fecha cambiada");
 console.log(fecha2);
  //console.log(datos);
 //console.log(datos.info);
 //console.log(datos.results[0.].gender);//genero
 //console.log(datos.results[0.].name.first);//primer nombre
  //console.log(datos.results[0.].name.last);
   //console.log(datos.results[0.].location.street.name);
    //console.log(datos.results[0.].location.street.number);
     //console.log(datos.results[0.].location);
     // document.getElementById('natalicio').innerHTML=datos.results[0.].dob.date;//fecha de nacimiento

 //console.log(datos.results[0.].registered.age);
*/
}
capturarDatos();

function formato_fecha(x){
    const year=x.substring(0,4);
    const mes=x.substring(5,7);
    const dias=x.substring(8,10);
    const fecha2 = dias+"/"+mes+"/"+year;
    return fecha2;
}
 