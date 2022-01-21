// Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única, para análise de outros departamentos do banco

const clientes = [{
    nome: "André",
    cpf: "123123",
    email: "andre@gmail.com",
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "09/11/2003"
    }]
},
{
    nome: "Alguma Pessoas",
    cpf: "987987",
    email: "alumini@gmail.com",
    dependentes: [{
        nome: "Sueli",
        parentesco: "mãe",
        dataNasc: "09/01/1997"
    }]
}
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];
// spread operator. Esse operador são ... pontos. Ele extrai apenas uma variável da lista. Ele espalha o conteúdo no array

console.table(listaDependentes);


