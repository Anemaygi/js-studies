// Acessar um objeto com informações de um cliente e exibir essas informações no console

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123123",
    email: "andre@gmail.com"
}

// nomeDoObjeto.itemQueQUer
// notação de ponto. 
console.log(`O nome é ${cliente.nome} e tenho ${cliente.idade} anos. 1 + 1 é ${1+1}`);

console.log(`três primeiros dígitos do cpf: ${cliente.cpf.substring(0,3)}`);


// com colchetes
// Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes geradas pelo sistema e printar o resultado na tela

// Não dá pra fixar no código qual chave queremos acessar

const chaves = ["nome", "idade", "cpf", "email"];
// Array de chaves

console.log(cliente[chaves[0]]);
console.log(cliente["nome"]);
// Podemos usar a notação de colchetes para receber as chaves de outro lugar. É utilizado pois não dá pra usar a notação de . para variáveis. Quando queremos que JS encontre passando uma variável, a gente coloca entre colchetes
// Podemos usar um forEach passando eplas chaves

chaves.forEach(info=>console.log(cliente[info]));

console.log(cliente["ruim"]);
// Se tentar acessar chave de objeto que não existe, não dá erro! Dá undefined.