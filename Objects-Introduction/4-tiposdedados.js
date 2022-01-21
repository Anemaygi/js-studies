// Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de um número em algum cadastro

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123123",
    email: "andre@gmail.com",
    fones: ["123456","987654"]
}
// Pode ter tipos primitivos como valores de chaves, mas também pode ter arrays.

cliente.fones.forEach(info => console.log(info));

