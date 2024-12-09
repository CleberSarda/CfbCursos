const carro=document.getElementById("carro")
const btn_parar=document.getElementById("btn_parar")
const btn__esquerda=document.getElementById("btn__esquerda")
const btn__direita=document.getElementById("btn__direita")

const init=()=>{
    carro.style="position:relative;left:0px"
}

let anima=null

const move=(dir)=>{
    carro.style.left=parseInt(carro.style.left) + (10*dir) +"px"
    anima=setTimeout(move,20,dir)
}

btn_parar.addEventListener("click",()=>{
    clearTimeout(anima)
})

btn__esquerda.addEventListener("click",()=>{
    clearTimeout(anima)
    move(-1)
})

btn__direita.addEventListener("click",()=>{
    clearTimeout(anima)
   move(1)
})





window.onload=init