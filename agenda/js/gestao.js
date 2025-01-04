const btn_pesq=document.querySelector("#btn_pesq");
const f_txtpesq=document.querySelector("#f_txtpesq");
const dados=document.querySelector("#dados");

const preencherdgv=()=>{
    dados.innerHTML="";
    const endpoint=`http://127.0.0.1:8080/pesquisartodoscontatos`;
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        dados.innerHTML="";
        res.forEach((el)=>{
            const linha=document.createElement("div");
            linha.setAttribute("class","linhadados");

            const c1=document.createElement("div");
            c1.setAttribute("class","coluna c1")
            c1.innerHTML=el.n_contato_contatos;
            linha.appendChild(c1);

            const c2=document.createElement("div");
            c2.setAttribute("class","coluna c2")
            c2.innerHTML=el.s_nome_contatos;
            linha.appendChild(c2);

            const c3=document.createElement("div");
            c3.setAttribute("class","coluna c3")
            c3.innerHTML=el.s_whatsapp_contatos;
            linha.appendChild(c3);

            const c4=document.createElement("div");
            c4.setAttribute("class","coluna c4")
            c4.innerHTML=el.s_celprof_contatos;
            linha.appendChild(c4);

            const c5=document.createElement("div");
            c5.setAttribute("class","coluna c5")
            c5.innerHTML=el.s_email_contatos;
            linha.appendChild(c5);

            const c6=document.createElement("div");
            c6.setAttribute("class","coluna c6")
            c6.innerHTML=el.d_dtnasc_contatos;
            linha.appendChild(c6);

            const c7=document.createElement("div");
            c7.setAttribute("class","coluna c7 c_op")
            const imgdelete=document.createElement("img");
            imgdelete.setAttribute("src","img/delete.svg");
            imgdelete.setAttribute("class","iconeop");
            imgdelete.addEventListener("click",(evt)=>{
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML;
                removerContato(id);
            })
            const imgeditar=document.createElement("img");
            imgeditar.setAttribute("src","img/edit.svg")
            imgeditar.setAttribute("class","iconeop");
            c7.appendChild(imgdelete);
            c7.appendChild(imgeditar);
            linha.appendChild(c7);


            dados.appendChild(linha);
        })
    });
};

preencherdgv();

const removerContato=(id)=>{
    const endpoint=`http://127.0.0.1:8080/deletarcontatos/${id}`;
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            preencherdgv();
        }
    })
}

