// Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancárias

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
        // this está voltado para o próprio objeto que estamos analisando
    }
    // métodos são funções que trabalham no contexto de um objeto
}

console.log(cliente.saldo);
cliente.depositar(500);
console.log(cliente.saldo);

// Objetos literais recebem valores dentro de suas chaves. São bons para objetos únicos, pois o objeto literal aponta para um mesmo local na memória, mesmo se você criar cópias dele. Ou seja, não cria uma cópia, ele faz uma referência pro objeto original

// Objetos podem ser criados utilizando o método "Object.create()"

// Esse método cria um novo objetivo utilizando o objeto passado via parâmetro como protótipo. 

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento
