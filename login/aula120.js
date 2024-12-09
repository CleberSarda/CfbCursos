const f_nome=document.querySelector("#f_nome")
const f_nota=document.querySelector("#f_nota")
const f_msg=document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click",evt=>{
    let estadoValidacao=f_nota.validity
    
    if(estadoValidacao.valueMissing){
        f_nota.setCustomValidity("Poxa, este campo é obrigatório")
    }else if(estadoValidacao.rangeOverflow){
        f_nota.setCustomValidity("Nossa, que nota alta você digitou.")
    }else if(estadoValidacao.rangeUnderflow){
        f_nota.setCustomValidity("Credo, você digitou uma nota muito baixa.")
    }else if(estadoValidacao.typeMismatch){
        f_nota.setCustomValidity("Digite apenas número")
    }
    f_nota.reportValidity()
    evt.preventDefault()
})