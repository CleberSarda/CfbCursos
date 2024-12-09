const nome=Symbol("nome")
const numero=Symbol("nome")
const corUniforme=Symbol("nome")

const Jogador={
    nome:"j1",
    numero:10,
    corUniforme:"Amarelo"
}

for(p in Jogador){
    console.log(p)
}

console.log(Jogador.nome)