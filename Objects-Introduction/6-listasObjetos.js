// Desafio: Verificar a melhor forma de agregar a informação de um novo dependente ao objeto Cliente

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
    }]
}

// Como lidar com a necessidade de fazer um array de objetos
// 1 - transformar em array com []. Agora, pode usar funções de array


console.log(cliente.dependentes);

cliente.dependentes.push({
    nome: "Giane",
    parentesco: "irmã",
    dataNasc:"15/11/2003"
})

console.log(cliente.dependentes);

const filhaNova = cliente.dependentes.filter(dependente => 
    {if (dependente.dataNasc === "09/11/2003"){
        return dependente;
    }

    })

console.log(filhaNova[0]["nome"]);