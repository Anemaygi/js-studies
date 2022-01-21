// Declaração de função
function declaraSoma(num1,num2){
    return num1+num2;
}

// Expressão de função

const soma = function(num1,num2){
    return num1 + num2;
}
// É importante ser const para não colocar um valor na função e apagar no meio do código

// Não tem um nome da função de fato. Criamos um const com o nome da função. O nome é opcional e não é usado sempre.

// Anônimas! Somente a const possui nome. 

// DIFERENÇA CRUCIAL: 
// Com declaração, vc pode chamar a função antes de sua declaração.
// Com expressão, isso NÃO é possível.
// Declaração de função com const, é como uma variável. Por isso, é importante inicializar primeiro. As exceções são o var e as declarações. Ele executa var e declarações primeiro, depois o resto do códgio
// Hoisting: içar ou levantar - traz todas as declarações para o topo do código. Antes de fazer o código, ele lista as declarações e o var.

console.log(soma(1,2));