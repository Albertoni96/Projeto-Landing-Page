var SetaDireita = window.document.getElementById ("seta-direita")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var leonardo = window.document.getElementById("leonardo")
var SetaEsquerda = window.document.getElementById ("seta-esquerda")

function RolarParaDireita(){
    bruna.style = "display:none"
    leonardo.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    SetaEsquerda.style = "display:none"
    SetaDireita.style ="display:flex"
}