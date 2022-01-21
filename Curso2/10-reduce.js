
// Desadio médias das turmas
// Calcule a média geral dee cada sala

const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

function mediaSala(notas){
    // reduce sempre precisa dos dois parâmetros. O primeiro é o acumulador, o segundo é o atual;
    // Ele itera no array. O atual representa o valor do elemento atual.
    // O 0 é o valor que será acumulado
    const somaDasNotas = notas.reduce(
        (acumulador,atual)=>
        atual + acumulador,0)
        return somaDasNotas/notas.length;
    // o primeiro argumento do reduce é a função callback
    // O segundo é o valor inicial (que é igual a 0)
        
// método reduce reduz todo um array para apenas um valor
}
console.log(mediaSala(salaJS));
console.log(mediaSala(salaJava));
console.log(mediaSala(salaPython));