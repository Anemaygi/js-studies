// Boolean é basicamente true or false. É possível atribuir variáveis p/ isso!

const usuarioLogado = true;
const contraPaga = false;

// truthy ou falsey - Não são exatamente booleanos, mas agem como se fossem.
// Por exemplo, o 1 não é booleano, mas possui valor de verdadeiro, então é truthy;
// 0 é false; 1 é true;

console.log(0 == false);
console.log("" == false);
console.log(1 == true);
console.log(null == undefined);

// === -> compara valor e tipo
// == -> compara valor

// null é um tipo de dado que representa vazio (ou seja, nada). Quando iniciamos uma variável com let e deixamos-a sem valor nenhum, ela fica com valor undefined e pode ser utilizada.
// o null é o vazio ou nada. Ambos são similares e podem ser usados entre eles.

// null tem características especiais! 
let numero = 3;
console.log(typeof(null));
// Quando null foi criado no JS, ele foi criado como um objeto, mas deveria ser criado como um null. É um bug que existe e não é consertado, pois quebraria muitos códigos existentes. Quebrar alguns casos específicos