const config={
    cor:"#48f"
}
const cxmsg=new Cxmsg(config)

const btn_mostrarcxmsg=document.querySelector("#btn_mostrarcxmsg")
const btn_mostrarcxmsg2=document.querySelector("#btn_mostrarcxmsg2")
const btn_mostrarcxmsg3=document.querySelector("#btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click",()=>{
    cxmsg.mostrar("CFB Cursos","Curso de JavaScript")
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    cxmsg.mostrar("You Tube","Canal com cursos de Programação")
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    cxmsg.mostrar("Java Script","Aula 136")
})