// Por que as funções são importantes?

let x = "giane";
console.log(x);
x = "oi";

// A função isola um bloco de código e podemos dizer quando ele deve ser utilizado
// Declara a função e diz o que faz
function imprimeTexto(y){
    console.log(y);
}

// Executar a função 1 ou mais vezes.

imprimeTexto(x);
imprimeTexto("AAAAA");

// Funções são os trechos separados em declaração e que a gente pede, em determinado momento, para chamar.


// Pode ser repetido!
// Há 3 jeitos de escrever as funções

// 1- Declaração de função: function nomeDaFunção(parâmetro){ o que fará }

function soma(a,b){
    let soma = a+b;
    imprimeTexto("Dentro da soma");
    return(soma); // retorno da função
}
imprimeTexto(soma(1,2));