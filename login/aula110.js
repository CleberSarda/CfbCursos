const carro=document.getElementById("carro")
const btn_parar=document.getElementById("btn_parar")
const btn__esquerda=document.getElementById("btn__esquerda")
const btn__direita=document.getElementById("btn__direita")

const init=()=>{
    carro.style="position:relative;left:0px;width:100px"
    tamMax=window.innerWidth - parseInt(carro.style.width)
}

let anima=null
let tamMax=null

const move=(dir)=>{
    if(dir > 0){
        if(parseInt(carro.style.left) <= tamMax){
            carro.style.left=parseInt(carro.style.left) + (10*dir) +"px"
            anima=setTimeout(move,20,dir)
        }else{
            clearTimeout(anima)
        }
    }else if(dir < 0){
        if(parseInt(carro.style.left) >= 0){
            carro.style.left=parseInt(carro.style.left) + (10*dir) +"px"
            anima=setTimeout(move,20,dir)
        }else{
            clearTimeout(anima)
        }
    }

    console.log(tamMax)
    
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


window.addEventListener("load",init())
window.addEventListener("resize",()=>{
    tamMax=window.innerWidth - parseInt(carro.style.width)
})
