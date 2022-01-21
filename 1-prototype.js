// Prototype: 
// Propriedade __proto__ guarda as definições de todos os dados que criamos em JavaScript. Essa propriedade "proto" é como se fosse uma base de dos dados. Dessa forma, é possível utilizar métodos nas estruturas de dados que criamos.
// É um objeto oculto que JS cria e associa, por baixo dos panos, que trás seus próprios métodos. E, no __proto__ aparece todos seus métodos

// Dados primitivos não iriam precisar mas o JavaScript também cria uma base para eles. Pega propriedades de um objeto e pode usar em outros.

const array = [1,2,3];
console.log(array.__proto__);

const obj = {a:1,b:2};

// Propriedades de prototype
// Desafio: Gerar uma função que permita a criação de novos clientes a partir de um modelo.
function Cliente(nome, cpf, email,saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor
    }
}

// Diferença entre criar variáveis com esses nomes e utilizar o this.
const Giane = new Cliente("Giane","23456","giane@giane.com",1500);
// new = A partir da função cliente, estamos criando uma INSTÂNCIA de cliente. Ele passa os dados reais do cliente.
console.log(Giane);

// Acessando o __proto__ de Giane, dá pra ver que foi construído a partir de cliente.

// Giane.__proto__.__proto___: há um construtor de objeto. 

// O objeto "cliente" utilizou o construtor objeto
// A instância "Giane" utilizou o construtor cliente
// Isso é uma cadeira de protótipo. Há o objeto > criar um novo objeto genérico (Cliente) > Criar outro objeto (Giane)

// Propriedades não enumeradas : Não foram criadas por nós e, por isso, o node não apresenta.