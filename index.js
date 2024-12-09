const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 8080;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const parametros = url.parse(req.url, true);
    const mat = parametros.query.matricula;
    const pas = parametros.query.senha;

    // Validação básica
    if (!mat || !pas) {
        res.end(JSON.stringify({ error: "Parâmetros 'matricula' e 'senha' são obrigatórios" }));
        return;
    }

    let dados = { error: "Acesso negado ou dados inválidos" };

    // Verificação de credenciais
    if (mat === "123" && pas === "321") {
        dados = {
            nome: "Cleber",
            acesso: 10
        };
    }

    res.end(JSON.stringify(dados));
}).listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
