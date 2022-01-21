//Desafio - Média de notas

// médias 10-6.5-8-7,5

// Lista é um conjunto de elementos, que possuem suas próprias posições.

const notas = [10,6,8];
// Para inicializar uma lista
//console.log(notas.length);
// lenght é o tamanho.

const media = (notas) => {
    let media = 0;
    for(i=0;i<notas.length;i++){
        media = media + notas[i];
    } 
    media = media / notas.length;
    return media;
}

//Desafio 2 - Adicionar elementos!
// Método push: Adiciona um elemento no final
console.log(media(notas));
notas.push(7);
// método é uma função que recebe um parâmetro. Passamos o que queremos que seja inserido no último elemento do array.
console.log(media(notas));

console.log("~~~~~~~~~Next desafio");

//Desafio 3 - Deletar elementos!
const notas3 = [10,7,8,5,10];
console.log(`Média das notas (d3): ${media(notas3)}`);
notas3.pop(); //Esse método remove o último elemento da lista. Ele não aceita nenhum parâmetro, pois JS interpreta a redirada do último elemento
console.log(`Média das notas (d3): ${media(notas3)}`);


// Um método é uma função que serve como uma propriedade do array ou de um objeto. Faz tarefas pré-definidas usando dados do array e dos parâmetros que passamos.

// concat() -> junta dois arrays, o array passado como argumento vem depois do primeiro, salvar o resultado em outro array
let array1 = [10,10,10];
let array2 = [5,5,5];
let array3 = array1.concat(array2);
console.log(array3);

// filter() -> retorna lista com todos os elementos que passam em um teste feito por nós. Precisa ser salvo em novo array
console.log("~~~~~~~~~Next desafio");
const grande = (valor) =>{
    return valor >= 6;
}
console.log(array3.filter(grande));

// find() -> funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que for verdadeiro
console.log("~~~~~~~~~Next desafio");
console.log(array3.find(grande));

// findIndex() -> Retorna o índice do primeiro elemento q satisfazer a condição
console.log("~~~~~~~~~Next desafio");
console.log(array3.findIndex(grande));

// lastIndexOf() -> igual o findIndex, mas com o último elemento que satisfaz a condição
console.log("~~~~~~~~~Next desafio");
console.log(array3.lastIndexOf(grande));

// forEach() -> executa uma função para cada elemento do array individual - INSERÇÃO EM NOVO ARRAY DEVE SER FEITA NA FUNÇÃO

// shift() -> retira o primeiro elemento do array original. Acontece inplace.

// unshift() -> funciona igual ao push() porém adiciona na primeira posição (isso troca o índice dos demais elementos) -> inplace

// reduce()
// Utiliza uma função definida pelo usuário em cada um dos elemntos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor

// reduceRight()
// Começa no final do array e segue até o início

// Reverse()
// Inverte da ordem dos elementos do array e o primeiro vira último, o segundo penúltimo, etc...

// slice()
// copia uma parte do array para outro array

// sort()
// organiza o array de acordo com a classificação UNICODE, onde os número vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando

// splice()
// consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.

const arrayVazia = [,,,];
console.log(arrayVazia.length);
console.log(arrayVazia[0]);
console.log(arrayVazia[1]);
console.log(arrayVazia[2]);

// Array foi criado com 3 posições, mas todas elas estão vazias. Por isso, ao acessá-las, teremos undefined

const arrayVazia2 = [,,,];
console.log(arrayVazia2.length)
arrayVazia2.push(50)
console.log(arrayVazia2)
console.log(arrayVazia2.length)

// isso criará um array esparso. Ele adicionará o valor 50 depois dos espaços vazios.