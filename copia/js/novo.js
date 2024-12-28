const btngravar=document.querySelector("#btngravar")
const btn_cancelar=document.querySelector("#btn_cancelar")
const f_nome=document.querySelector("#f_nome")
const f_celular=document.querySelector("#f_celular")
const f_celprof=document.querySelector("#f_celprof")
const f_email=document.querySelector("#f_email")
const f_dtnasc=document.querySelector("#f_dtnasc")

btngravar.addEventListener("click",(evt)=>{
    const dados={
        "f_nome":f_nome.value,
        "f_celular":f_celular.value,
        "f_celprof":f_celprof.value,
        "f_email":f_email.value,
        "f_dtnasc":f_dtnasc.value
    }

    const cabecalho={
        method:'POST',
        body:JSON.stringify(dados)
    }

    const endpoint="http://127.0.0.1:8080/addcontatos"
    fetch(endpoint,cabecalho)
    .then(res=>{
        if(res.status==200){
            reset();
        }else{
            alert("Erro ao gravar novo contato");
        }
    })
});

btn_cancelar.addEventListener("click",(evt)=>{
    reset();
});

const reset=()=>{
    f_nome.value="";
    f_celular.value="";
    f_celprof.value="";
    f_email.value="";
    f_dtnasc.value="";
    f_nome.focus();
}


