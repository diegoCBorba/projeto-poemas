var a = document.getElementById("bt1")
var b = document.getElementById("bt2")
var texto = document.getElementById("texto1")
a.addEventListener('click', clicar)
b.addEventListener('click', clicar)

var verifica = Boolean(true)

function clicar(){
    if(verifica){
        texto.style.display = "block"
        a.style.display = "none"
        verifica = false 
    }else{
        texto.style.display = "none"
        a.style.display = "block"
        verifica = true
    }
}