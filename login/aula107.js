const carro=document.getElementById("carro")
const btn__esquerda=document.getElementById("btn__esquerda")
const btn__direita=document.getElementById("btn__direita")

const init=()=>{
    carro.style="position:relative;left:0px"
}

btn__esquerda.addEventListener("click",()=>{
    carro.style.left=parseInt(carro.style.left) - 10 +"px"
})

btn__direita.addEventListener("click",()=>{
    let pos=parseInt(carro.style.left)
    pos +=10
    carro.style=`position:relative;left:${pos}px`
    console.log(pos)
})





window.onload=init