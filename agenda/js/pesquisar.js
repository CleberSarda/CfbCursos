const btn_pesq=document.querySelector("#btn_pesq");

btn_pesq.addEventListener("click",(evt)=>{
    console.log(document.getElementsByName("f_pesq").value);
});
