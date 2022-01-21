// Var tem escopo global, funcionando em qualquer parte do código
// let e const tem escopo local, não podem ser acessadas em outros escopos e const não pode ter seu valor alterado depois de definido

// var é a primeira que surgiu. Funciona em qualquer parte do código. Escrever e sair utilizando. Não é mais utilizada!

var altura = 5;
var comprimento = 7;

area = altura*comprimento;
var area; // é possível criar a variável depois
// O js lê todo o programa, acha todas variáveis tipo var e as carrega, sem precisar declarar antes. Mas pode dar problemas, pois utiliza o mesmo nome de variável em duas partes sem perceber.
// o uso é muito liberado, e comportamentos não previstos podem acontecer
console.log(area);


let area2;
let forma = "triângulo";
let alt = 5;
let compri = 7;
if(forma == "retângulo"){
    area2 = alt*compri;
}
else if(forma == "triângulo"){
    area2 = (alt*compri)/2;
}

console.log(area2);

// Dentro do programa, há vários blocos de códigos definidos pelo {}. Mas não é interessante ter variáveis que seja possível mexer no valor dentro dos blocos, o var é muito solto e pode ser usado em outros blocos de código. Por segurança, é bom manter com o let.
// Busca a let que está fora do bloco e atribuindo o valor ao let que está lá fora.

//const é constante. Uma vez colocada no programa, não pode ser alterada. Protege o fluxo de trabalho da aplicação, impedir que o valor mude na codificação.
const formato = "triângulo";
const alt2 = 10;
const compri2 = 7;
//const area3;
// A const precisa de um valor inicializador. Precisa atribuir um valor no começo. Por isso, area3 deve ser o let
let area3;
if(formato == "quadrado"){
    area3 = alt2*compri2;
}
else{
    area3 = (alt2*compri2)/2;
}

console.log(area3);