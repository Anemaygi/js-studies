// Ponto extra
// Um aluno recebeu um ponto extra nas suas notas, adicione esse ponto em suas notaS:
// 10, 9, 8, 7, 6
const notas = [10, 9, 8, 7, 6];
const notasAtualizadas = notas.map(nota =>
    nota == 10 ? nota: ++nota);

    //o forEach não retorna 
    //o map retorna para um novo array.

console.log(notasAtualizadas);

// variavel++ -> retorna o valor da variável depois soma 1
// ++variavel -> soma 1 depois retorna o valor acrescentado da variável

// Padronizando os nomes
// Apenas letras maiúsculas
// ['ana Julia', 'Caio vinicius', 'BIA silva']

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];
const nomesAtt = nomes.map(
    nome => nome.toUpperCase()
);
console.log(nomesAtt);

// String também é uma sequência ordenada de caracteres, ou seja, é um array.
const nomezinho = 'Alguma';
console.log(nomezinho.length);



//
const arrayNums = [1, 2, 3, 4];
function multiplicaPorDez(num) {
    return num * 10
   }
const arraySomada = arrayNums.map(multiplicaPorDez)
// Não foi necessário passar parâmetros pois o map executa isso automaticamente

console.log(arraySomada);
// Funções chamadas como argumento são callbacks.

/* Escrita do map e functions */
// function
const notasAtualizadas = notas.map(function (nota) { return nota+1});

// arrow function
const notasAtualizadas = notas.map( nota => { return nota+1});

// arrow function na forma reduzida não precisa do return
const notasAtualizadas = notas.map(nota => nota+1);
