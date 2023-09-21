/* ===== CODIGO PARA LA IMPLEMENTACION EN LA PLANTILLA ===== */

// IMPLEMENTACION DEL HEADER
document.body.insertAdjacentHTML('afterbegin', `
    <div id="header" class="header">
        <div class="menu flexMenu">
            <div class="grupo1_menu flex1">
                <a href="./index.html" id="logoMenu">
                    <img src="./img/plantilla/logoFooter.png" alt="logoMenu">
                </a>
                
                <div id="iconMenu" class="iconMenu display">
                    <img class="icon" src="./img/plantilla/icon-menu.png" alt="">
                   
                </div>
                <div class="logo">
                <h5> Centro de Simulación Clinica de la Universidad Nacional de Jujuy - Dr. René Favarolo</h5>
                </div>
                </div>

            <div id="grupo2_menu" class="grupo2_menu flex2">
                <div class="flex2-1">
                    <div>
                        <a href="./index.html" title="Inicio" class="itemMenu"><span>Inicio</span></a>
                    </div>
                    <div>
                        <a href="./formacion.html" class="itemMenu"><span>Formación</span></a>
                    </div>
                    
                </div>
                
                </div>
            </div>
        </div>
    </div>
`);


// IMPLEMENTACION DEL FOOTER
document.body.insertAdjacentHTML('beforeend', `
    <div id="footer" class="footer">
    <div class="grupo1_footer">
        <div class="box1">
            <h3>Centro de Simulación Clínica de la Universidad Nacional de Jujuy - Dr. Rene Favarolo</h3>
            
            <br>
           
            <h3>Empresa Vinculadas</h3>
            
            <p> <h2><a href="https://www.syncrotech.com.ar"> Syncrotech </a></p></h2>
            <p> <a href="https://leistungargentina.com.ar/es/inicio/"> Leistung</a> </p>
            <p> <a href="./index.html"> Braun </a></p>    
        
        </div>
        <div class="box2">
        <h3>Conocé nuestra ubicación </h3>
        <br>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d454.9566014837049!2d-65.3013001468231!3d-24.18390601985303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f46fabf40cb%3A0xf09cb7f80e4fc819!2sSede%20Escuela%20Superior%20de%20Salud%20-%20UNJu!5e0!3m2!1ses!2sar!4v1693829473630!5m2!1ses!2sar" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="box3">
        <img id="imgFooter" src="./img/plantilla/logoFooter.png" alt="logoFooter" srcset="">
        </div>
    </div>
   
    </div>
`)


/* ======= JS PARA EL FUNCIONAMIENTO DEL MENU =======  */

let bandToggle = false;
let iconMenu = document.querySelector('#iconMenu');
let grupo2_menu = document.querySelector('#grupo2_menu');
iconMenu.addEventListener('click', () => {
    if (!bandToggle) {
        grupo2_menu.style.display = 'flex';
        bandToggle = true;
    } else {
        grupo2_menu.style.display = 'none';
        bandToggle = false;
    }
})

/* ======= COLOCAR EL LOGO EN LA SOLAPA DE LA PESTAÑA ====== */
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = './img/plantilla/logoFooter.png';

/* ======= PONER TITULO DE PAGINA (SI ESTE NO TIENE) ====== */

document.title = 'Centro de Simulación Clinica'


/* ======= POP CERRAR EXPLORARME ====== */

document.querySelector('.cerrar_pop').addEventListener('click', () => {

    document.querySelector('.pop_ofrecer_sistema').style.display = "none"


})
