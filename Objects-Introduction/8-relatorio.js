// Desafio: Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123123",
    email: "andre@gmail.com",
    fones: ["123456","987654"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "09/11/2003"
    },
    {
        nome: "Giane",
        parentesco: "irmã",
        dataNasc:"15/11/2003"
    }],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;
    }
}

// Como percorrer um objeto?
// com for ... in

let relatorio = "";
for (let info in cliente){
    // in e o nome do objeto
    //console.log(info); // imprime cada atributo do objeto
    if(typeof(cliente[info]) === "object" || typeof(cliente[info]) === "function"){
        continue // Não printar funções e arrays de objetos
    } else relatorio += `${info}: ${cliente[info]} 
    `;
    // A informação info representa cada um dos atributos!
}
console.log(relatorio);