import { Cxmsg } from "./cxmsg.js";

const callback_ok=()=>{
    
    }
        
const callback_naook=()=>{
    const config={
        cor:"#800",
        tipo:"ok",
        textos:null,
        comando_sn:null, 
    }
    Cxmsg.mostrar(config,"Erro","Login não efetuado! Usuário ou senha incorretos.");
}

const configlogin={
    cor:"048",
    img:"logo.png",
    endpoint:"http://192.168.2.107:8080"
}
Login.login(null,callback_naook,configlogin);