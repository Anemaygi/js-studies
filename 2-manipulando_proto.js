// Desafio: Aproveitar o cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança/

// Nossa função cliente genérico
function Cliente(nome, cpf, email,saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup ){
    Cliente.call(this,nome,cpf, email, saldo);
    this.saldoPoup = saldoPoup;
    // Estamos chamando o construtor de cliente para dentro do construtor de poupança. Pois o cliente poupança vai herdar todas propriedades do cliente
    // Estamos chamando o construtor cliente e suas propriedades para dentro de clientePoupancaa
}

const giane = new clientePoupanca("Giane","123123","email@email",1500,2000);
console.log(giane);