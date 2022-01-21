// Oferta de seguro
// Percorrer um objeto, verificar se existe dependentes e, caso exista, enviar uma mensagem de oferta de seguro
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

// Object.keys(cliente)
// Passamos o objeto como parâmetro, ele cria um array pegando todos as chaves do objeto que enviamos como parâmetro.


const oferecerSeguro = (obj) =>{
    const propsClientes = Object.keys(cliente);
    if(propsClientes.includes("dependentes")){
        console.log(`${cliente.nome}, faça um seguro!`);
    }
}

oferecerSeguro(cliente);

// Outro método é o Object.values que pega o valor de cada chave.
console.log(Object.values(cliente));

// Outro método é Object.entries, pois apresenta um array que contém a chave e seu valor.
console.log(Object.entries(cliente));