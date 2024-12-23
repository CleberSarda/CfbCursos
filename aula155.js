const configdgv={
    endpoint:"http://127.0.0.1:8080/produtos/",
    idDestino:"dgvDados",
}
const dgv=(configdgv)=>{
    const dgvDados=document.getElementById(configdgv.idDestino);
    dgvDados.innerHTML=""
    fetch(configdgv.endpoint)
    .then(res=>res.json())
    .then(res=>{
        console.log(res);
        res.forEach(el => {
            const dgvLinha=document.createElement("div");
            dgvLinha.setAttribute("class","dgvLinha");

            const c1=document.createElement("div");
            c1.setAttribute("class","coluna c1");
            c1.innerHTML=el.n_id_produto;
            dgvLinha.appendChild(c1);

            const c2=document.createElement("div");
            c2.setAttribute("class","coluna c2");
            c2.innerHTML=el.s_nome_produto
            ;
            dgvLinha.appendChild(c2);

            const c3=document.createElement("div");
            c3.setAttribute("class","coluna c3");
            c3.innerHTML=el.s_marca_produto
            ;
            dgvLinha.appendChild(c3);

            const c4=document.createElement("div");
            c4.setAttribute("class","coluna c4");
            c4.innerHTML=el.
            S_modelo_produto
            
            ;
            dgvLinha.appendChild(c4);

            const c5=document.createElement("div");
            c5.setAttribute("class","coluna c5");
            dgvLinha.appendChild(c5);


            const imgdelete=document.createElement("img");
            imgdelete.setAttribute("class","dgvIcone");
            imgdelete.setAttribute("src","delete.svg");
            imgdelete.addEventListener("click",(evt)=>{
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML;
                const linha=evt.target.parentNode.parentNode;
                const endpoint=`http://127.0.0.1:8080/removeprodutos/${id}`;
                fetch(endpoint)
                .then(res=>{
                    if(res.status==200){
                        linha.remove();
                    }
                })
            });
            c5.appendChild(imgdelete);

            const imgEditar=document.createElement("img");
            imgEditar.setAttribute("class","dgvIcone");
            imgEditar.setAttribute("src","editar.svg");
            imgEditar.addEventListener("click",(evt)=>{
                document.querySelector("#janelaEditar").classList.remove("ocultar");
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML;
                const endpoint=`http://127.0.0.1:8080/produto/${id}`;
                fetch(endpoint)
                .then(res=>res.json())
                .then(res=>{
                    document.querySelector("#f_ideditar").value=res[0].n_id_produto;
                    document.querySelector("#f_produtoeditar").value=res[0].s_nome_produto;
                    document.querySelector("#f_marcaeditar").value=res[0].s_marca_produto;
                    document.querySelector("#f_modeloeditar").value=res[0].
                    S_modelo_produto;
                }) 
            });
            c5.appendChild(imgEditar);


            const imgExibir=document.createElement("img");
            imgExibir.setAttribute("class","dgvIcone");
            imgExibir.setAttribute("src","exibir.svg");
            imgExibir.addEventListener("click",(evt)=>{
                document.querySelector(".janelaView").classList.remove("ocultar");
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML;
                const endpoint=`http://127.0.0.1:8080/produto/${id}`;
                fetch(endpoint)
                .then(res=>res.json())
                .then(res=>{
                    document.querySelector("#f_id").value=res[0].n_id_produto;
                    document.querySelector("#f_produto").value=res[0].s_nome_produto;
                    document.querySelector("#f_marca").value=res[0].s_marca_produto;
                    document.querySelector("#f_modelo").value=res[0].
                    S_modelo_produto;
                })   
            });
            c5.appendChild(imgExibir);

            dgvDados.appendChild(dgvLinha);
        });
        const btn_incluir=document.querySelector("#btn_incluir");
        btn_incluir.addEventListener("click",(evt)=>{
            document.querySelector("#janelaIncluir").classList.remove("ocultar");

        })
    })
}

dgv(configdgv);


document.querySelector("#btn_ok").addEventListener("click",(evt)=>{
    document.querySelector(".janelaView").classList.add("ocultar");
});
document.querySelector("#btn_gravar").addEventListener("click",(evt)=>{
    document.querySelector("#janelaEditar").classList.add("ocultar");
    const id=document.querySelector("#f_ideditar").value;
    const produto=document.querySelector("#f_produtoeditar").value;
    const marca=document.querySelector("#f_marcaeditar").value;
    const modelo=document.querySelector("#f_modeloeditar").value;
    const endpoint=`http://127.0.0.1:8080/updateproduto/${id}/${produto}/${marca}/${modelo}`;
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            document.querySelector("#janelaEditar").classList.add("ocultar");
            dgv(configdgv);
        }else{
            alert("Erro ao Atualizar");
        }
    })    
});

document.querySelector("#btn_cancelar").addEventListener("click",(evt)=>{
    document.querySelector("#janelaEditar").classList.add("ocultar");
});

document.querySelector("#btn_Incluir").addEventListener("click",(evt)=>{
    document.querySelector("#janelaIncluir").classList.add("ocultar");
    const id=document.querySelector("#f_idIncluir").value;
    const produto=document.querySelector("#f_produtoIncluir").value;
    const marca=document.querySelector("#f_marcaIncluir").value;
    const modelo=document.querySelector("#f_modeloIncluir").value;
    const endpoint=`http://127.0.0.1:8080/insertproduto/${produto}/${marca}/${modelo}`;
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            document.querySelector("#janelaIncluir").classList.add("ocultar");
            dgv(configdgv);
        }else{
            alert("Erro ao Incluir");
        }
    })    
});

document.querySelector("#btn_desfazer").addEventListener("click",(evt)=>{
    document.querySelector("#janelaIncluir").classList.add("ocultar");
});
