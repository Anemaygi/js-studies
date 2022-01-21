// Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123123",
    email: "andre@gmail.com",
    fones: ["123456","987654"]
}
//Dados dos tipos primitos, arrays e objetos!
cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "09/11/2003"
}

console.log(cliente);

cliente.dependentes.nome = 'Você';
console.log(cliente);