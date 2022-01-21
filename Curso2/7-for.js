// Imprimir o índice e a lista com os seguintes números: 100,200,300,400,500,600
const lista = [100,200,300,400,500,600];

console.log("índice"+'\t'+"valor")
for (let i = 0; i < lista.length;i++){
    console.log(i+'\t'+lista[i]);
}

// Média com for
// Calcular a média entre as seguintes notas com for: 10, 6.5, 8, 7.5
console.log("next ~~");
const notas = [10, 6.5, 8, 7.5];
let media = 0;
for (let y = 0; y < notas.length; y++){
    media = media + notas[y];
}
media = media / notas.length;
console.log(media);
console.log("next ~~");

// Média com ForEach
// 10, 6.5, 8, 7.5
// Um jeito diferente de passar por cada elemento do array
media = 0;
// callback


notas.forEach(nota =>{
    media += nota;
    // método que leva como parâmetro um item da lista
    //Essa função tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente.
})
media = media / notas.length;
console.log(media);

/*

    Utilizar mais métodos, tais quais indexOf() e includes() para percorrer arrays e comparar resultados;
    Utilizar a estrutura for e entender seu funcionamento;
    Substituir o for por métodos de array mais modernos do JavaScript, como forEach().



*/

const nomes = ['Ana', 'Ju', 'Leo', 'Paula'];

nomes.forEach(imprimeNome);
// Pode receber um segundo parâmetro opcional
function imprimeNome(nome){
    console.log(nome);
}