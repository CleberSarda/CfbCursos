import { Login } from "./login147.js";
import { Cxmsg } from "./cxmsg.js";

const callback_ok=()=>{
    
    }
        
const callback_oknao=()=>{
    const config={
        cor:"#800",
        tipo:"ok",
        textos:null,
        comando_sn:null, 
        }
        Cxmsg.mostrar(config,"Erro","Login não efetuado! Usuário ou senha incorretos.");
}

Login.login(callback_ok,callback_oknao);