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

}

btn_parar.addEventListener("click",()=>{
    clearInterval(anima)
})

btn__esquerda.addEventListener("click",()=>{
    clearInterval(anima)
    anima=setInterval(move,20,-1)
})

btn__direita.addEventListener("click",()=>{
    clearInterval(anima)
    anima=setInterval(move,20,1)
})





window.onload=init