// Operador ternário (não existe em muitas linguagens)

// Ele faz a comparação, mas com uma maneira especial. É escrita em única linha e possui a resposta do verdadeiro e falso, mas pode pegar peça por ter escrita reduzida.

const idadeMinima = 18;
const idadeCliente = 12;
/*
if(idadeCliente >= idadeMinima){
    console.log("Pode beber");
}
else{
    console.log("Não pode");
}
*/
//Com o ternário, podemos transformar esse texto em:

console.log(idadeCliente >= idadeMinima ? "Pode beber":"Não pode");

// Sintaxe
/*
comparacao ? true : false
*/