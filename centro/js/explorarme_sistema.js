// VARIABLES por cada Unidad Academica
var huma
var eco
var salud
var segu
var ing
var agra
var art
var jur

function resultados() {

    huma = huma * 100 / 7
    eco = eco * 100 / 7
    ing = ing * 100 / 7
    agra = agra * 100 / 7
    salud = salud * 100 / 5
    segu = segu * 100 / 5
    art = art * 100 / 5
    jur = jur * 100 / 5

    let estructura = `
    <p>A- Humanidades y Cs. Sociales <a href="./humanidades.html">Ver Más</a> </p>
    <progress value="${huma.toFixed(0)}" max="100" data-valor="${huma.toFixed(0)}%">
    </progress>
    <p>B- Ciencias Económicas y Administrativas <a href="./economicas.html">Ver Más</a></p>
    <progress value="${eco.toFixed(0)}" max="100" data-valor="${eco.toFixed(0)}%">
    </progress>
    <p>C- Ciencias de la Salud <a href="./ciencias_salud.html">Ver Más</a></p>
    <progress value="${salud.toFixed(0)}" max="100" data-valor="${salud.toFixed(0)}%">
    </progress>
    <p>D- Seguridad <a href="#">Ver Más</a></p>
    <progress value="${segu.toFixed(0)}" max="100" data-valor="${segu.toFixed(0)}%">
    </progress>
    <p>E- Ingeniería e informática <a href="ingenieria.html">Ver Más</a></p>
    <progress value="${ing.toFixed(0)}" max="100" data-valor="${ing.toFixed(0)}%">
    </progress>
    <p>F- Ciencias Agrarias <a href="./agrarias.html">Ver Más</a></p>
    <progress value="${agra.toFixed(0)}" max="100" data-valor="${agra.toFixed(0)}%">
    </progress>
    <p>G- Artísticas <a href="#">Ver Más</a></p>
    <progress value="${art.toFixed(0)}" max="100" data-valor="${art.toFixed(0)}%">
    </progress>
    <p>H- Ciencias Políticas y Jurídicas <a href="./ciencias_juridicas.html">Ver Más</a></p>
    <progress value="${jur.toFixed(0)}" max="100" data-valor="${jur.toFixed(0)}%">
    </progress>
    `


    document.querySelector('#resultados').innerHTML = estructura;

    document.querySelector('.popup').style.display = "flex"

}

document.getElementById('btn_evaluar').addEventListener("click", () => {
    huma = 0
    eco = 0
    salud = 0
    segu = 0
    ing = 0
    agra = 0
    art = 0
    jur = 0

    document.querySelectorAll('.Huma').forEach(elemento => {
        if (elemento.checked == true) {
            huma++;
        }
    })

    document.querySelectorAll('.Eco').forEach(elemento => {
        if (elemento.checked == true) {
            eco++
        }
    })

    document.querySelectorAll('.Salud').forEach(elemento => {
        if (elemento.checked == true) {
            salud++
        }
    })

    document.querySelectorAll('.Segu').forEach(elemento => {
        if (elemento.checked == true) {
            segu++
        }
    })

    document.querySelectorAll('.Ing').forEach(elemento => {
        if (elemento.checked == true) {
            ing++
        }
    })

    document.querySelectorAll('.Agra').forEach(elemento => {
        if (elemento.checked == true) {
            agra++
        }
    })

    document.querySelectorAll('.Art').forEach(elemento => {
        if (elemento.checked == true) {
            art++
        }
    })

    document.querySelectorAll('.Juridica').forEach(elemento => {
        if (elemento.checked == true) {
            jur++
        }
    })

    resultados()
})

// CIERRA EL MODAL (POPUP)
document.querySelector('.res').addEventListener('click', () => {

    document.querySelector('.popup').style.display = "none"

    document.querySelectorAll("input[type=checkbox]").forEach(elemento => {
        elemento.checked = false
    })
})