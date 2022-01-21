// tipo de dado
// como trabalhar os tipos de dados com os booleanos.

// JS tem conversão implícita. ELa permite a conversão de um tipo de dado em outro. 
const num1 = 2;
const num2 = "2";
console.log(num1 == num2);
// Pegou o número, transformou em string e comparou. Essa comparação implícita pode trazer alguns bugs! Não é normal que a maior parte das linguagens faça isso...

console.log(num1 === num2); //Comparação explícita. Compara o número e o tipo.

console.log(num1+num2); //pegou o número e transformou em string, fez uma concatenação.

//Conversão explícita
// Serão usadas:
// Number -> transformar string em número 
// String -> transformar número em string

console.log(num1+Number(num2)); // o num2 virou número e fez a soma!

//Se converter string que não é apenas de números, dará NaN
const yes = "4a";
console.log(Number(yes));

// Além de String() pode ser utilizado o .toString()~
const telefone = 123456;

console.log(typeof(telefone));
console.log(typeof(telefone.toString()));

// Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões de forma correta, problemas podem aparecer, então é sempre bom fazer as conversões de forma explícita.