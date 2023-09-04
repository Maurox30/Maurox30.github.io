function carrucel() {
    document.querySelectorAll(".imagen")[0].style.left = "0%"
}
setTimeout(carrucel,2000)

function carrucel2() {
    document.querySelectorAll(".imagen")[0].style.left = "-100%"
    document.querySelectorAll(".imagen")[1].style.left = "0%"
    
}
setTimeout(carrucel2,4000)