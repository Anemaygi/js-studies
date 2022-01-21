// Tipos númericos

const  meuNumero = 3;
// Nome que identifica um espaço da memória que guarda uma informação específica com um valor específio.
// É importante que o JS saiba o tipo de dado para processá-lo.

const num1 = 1;
const num2 = 2;

const operacaoMatematica = num1+num2;

console.log(operacaoMatematica-1);

// Ponto flutuante
/* 
São os números que chamamos, popularmente, de decimais. Quando definir o valor, podemos colocar . e o número de pontos flutuantes.

Também podem ser representados por notação exponencial (multiplicado por e ou E)
*/

const numFloat1 = .5;
const numFloat2 = 5.6

// Como cortar números depois da vírgula?
// Math.round arredonda o número de casas decimais para o inteiro mais próximos
// método .toFixed() -> Ajuda a controlar o número de casas decimais depois da vírgula, indicando o número de casas que serão recebidas como parâmetro -> Seu retorno será uma string que representa o número arredondada para cima

// Para usar o pi, utilizar Math.PI
console.log("PI: ",Math.PI);
console.log("Math.round PI: ",Math.round(Math.PI));
console.log("toFixed PI: ",Math.PI.toFixed(3));

// NaN -> Not a Number. Tentou fazer uma operação matemática, mas o resultado não é reconhecido como um número.

// Formatando o resultado para dinheiro Real
// método toLocaleString() -> converte um número para uma string, arredondando e convertendo para moeda do páis.
/* Argumentos:
-> style: formato utilizado
-> decimal
-> currency (formato monetário que indica a moeda utilizada)
-> percent (formato percentual)

*/

const salario = 18.50;
console.log("O salário é ",salario);
console.log("Formatado é ",salario.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));

// Outros métodos de arredondamento
// Math.ceil() -> retorna o maior número inteiro que é maior que o número passado
// Math.floor() -> retorna o menor núemro inteiro que é menor que o número passado
const teste = 2.134;
console.log("número: ",teste);
console.log("ceil: ",Math.ceil(teste));
console.log("floor: ",Math.floor(teste));

// Ordenar números
var lista = [1,9,7,56,12,9,0];
console.log("lista é ",lista);
console.log("ordenada é ",lista.sort());
// .sort() utiliza a ordenação alfabética baseada em UNICODE

//Criando função de comparação
function comparaNumeros(a,b){
    if (a == b) return 0; 
    if (a < b) return -1; 
    if (a > b) return 1; }

    console.log("ordenada2 é ",lista.sort(comparaNumeros));