class Login{
    static logado=false;
    static matlogado=null;
    static nomelogado=null;
    static aessologado=null;
    static estilocss=null;
    static callback_ok=null;
    static callback_naook=null;
    static config={
        cor:"048",
        img:"logo.png"
    };
    static endpoint="http://192.168.2.107:8080/";

    static login=(callback_ok,callback_naook,config=null)=>{
        if(config!=null){
            this.config=config;
        }
        this.callback_ok=callback_ok;
        this.callback_naook=callback_naook;
        this.estilocss=
        ".fundoLogin{display: flex;justify-content: center;align-items: center; width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;  background-color: rgba(0,0,0,.75);box-sizing: border-box;}"+
        ".baseLogin{display: flex;justify-content: center;align-items: stretch; width: 50%;box-sizing: inherit;}"+
        ".elementosLogin{display: flex;justify-content: center;align-items: flex-start;flex-direction: column;width: 50%;background-color: #eee;padding: 10px;border-radius: 15px 0px 0px 15px;box-sizing: inherit;}"+
        ".logoLogin{display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;padding: 10px;border-radius: 0px 15px 15px 0px;box-sizing: inherit;}"+
        ".campoLogin label{font-size: 18px;}"+
        ".campoLogin input{font-size: 18px;padding: 5px;background-color: #fff;border-radius: 5px;margin-bottom: 10px;}"+
        ".logoLogin img{width: 90%;box-sizing: inherit;}"+
        ".campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;}"+
        ".botoesLogin{display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: inherit;}"+
       `.botoesLogin button{cursor: pointer;background-color:#${this.config.cor};color: #fff;border-radius: 5px;padding: 10px;width: 100px;box-sizing: inherit;}`

        const styleEstilo=document.createElement("style");
        styleEstilo.setAttribute("id","id_estiloLogin");
        styleEstilo.setAttribute("rel","stylesheet");
        styleEstilo.setAttribute("type","text/css");
        styleEstilo.innerHTML=this.estilocss;
        document.head.appendChild(styleEstilo);

        const corpo=document.body;

        const fundoLogin=document.createElement("div");
        fundoLogin.setAttribute("id","fundoLogin");
        fundoLogin.setAttribute("class","fundoLogin");
        document.body.prepend(fundoLogin);

        const baseLogin=document.createElement("div");
        baseLogin.setAttribute("id","baseLogin");
        baseLogin.setAttribute("class","baseLogin");
        fundoLogin.appendChild(baseLogin);

        const elementosLogin=document.createElement("div");
        elementosLogin.setAttribute("id","elementosLogin");
        elementosLogin.setAttribute("class","elementosLogin");
        baseLogin.appendChild(elementosLogin);

        const campoLoginUsername=document.createElement("div");
        campoLoginUsername.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginUsername);

        const labelUsername=document.createElement("label");
        labelUsername.innerHTML="username;"
        campoLoginUsername.appendChild(labelUsername);

        const imputUsername=document.createElement("input");
        imputUsername.setAttribute("id","f_username");
        imputUsername.setAttribute("type","text");
        imputUsername.setAttribute("name","f_username");
        campoLoginUsername.appendChild(imputUsername);

        const campoLoginSenha=document.createElement("div");
        campoLoginSenha.setAttribute("id","campoLoginSenha");
        campoLoginSenha.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginSenha);

        const labelSenha=document.createElement("label");
        labelSenha.innerHTML="Senha";
        campoLoginSenha.appendChild(labelSenha);

        const imputSenha=document.createElement("input");
        imputSenha.setAttribute("id","f_senha");
        imputSenha.setAttribute("type","password");
        imputSenha.setAttribute("name","f_senha");
        campoLoginSenha.appendChild(imputSenha);

        const botoesLogin=document.createElement("div");
        botoesLogin.setAttribute("class","botoesLogin");
        elementosLogin.appendChild(botoesLogin);

        const btn_login=document.createElement("button");
        btn_login.setAttribute("id","btn_login");
        btn_login.innerHTML="Login";
        btn_login.addEventListener("click",(evt)=>{
            this.verificaLogin();
        });
        botoesLogin.appendChild(btn_login);

        const btn_cancelar=document.createElement("button");
        btn_cancelar.setAttribute("id","btn_cancelar");
        btn_cancelar.innerHTML="Cancelar";
        btn_cancelar.addEventListener("click",(evt)=>{
            this.fechar();
        });
        botoesLogin.appendChild(btn_cancelar);

        const logoLogin=document.createElement("div");
        logoLogin.setAttribute("id","logoLogin");
        logoLogin.setAttribute("class","logoLogin");
        baseLogin.appendChild(logoLogin);

        const imgLogoLogin=document.createElement("img");
        imgLogoLogin.setAttribute("src",this.config.img);
        imgLogoLogin.setAttribute("title","SuporteTi");
        logoLogin.appendChild(imgLogoLogin);

        
        
    }

    static verificaLogin=()=>{
        const mat=document.querySelector("#f_username").value;
        const pas=document.querySelector("#f_senha").value;

        const andpoint=`http://192.168.2.107:8080/?matricula=${mat}&senha=${pas}`;
        fetch(andpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res && res.nome){
                this.logado=true;
                this.matlogado=mat;
                this.nomelogado=res.nome;
                this.acessologado=res.acesso;
                this.callback_ok();
                this.fechar();
            }else{
                this.logado=false;
                this.matlogado=null;
                this.nomelogado=null;
                this.acessologado=null;
                this.callback_naook();
            }
        })
    }
    static fechar=()=>{
        const fundoLogin=document.querySelector("#fundoLogin");
        fundoLogin.remove();
        const id_estiloLogin=document.querySelector("#id_estiloLogin");
        id_estiloLogin.remove();
    }
}


export {Login};