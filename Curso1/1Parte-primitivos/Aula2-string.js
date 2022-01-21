// Tipos primitivos - String

// Servem para guardar tipo texto. Quase todo tipo de informação

const texto2 = 'Aspas simples';

//Template string ou template literal
const aaa = `oi "eu sou 'eu'"`;
console.log(aaa);

// Concatenação (+)
// Junta duas strings
const frase = "meu nome é ";
const nome = "Giane";
const fraseinteira = frase + nome;
console.log(fraseinteira);

// Codificação de caracteres. Conjunto de caracteres especiais, cada um com seus próprios códigos.
// Para que o computador possa decifrar um caractere especial, é preciso utilizar um sisema específico que tenha basicamente um código para cada caractere, e que o computador possa acessá0lo para fazer a conversão

// Unicode
// UTF - Unicode Transformation Format (ou formato de conversão de unicode)
// Pode cifrar e decifrar caracteres de +150 idiomas e emojis.

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'
// o \u é um caracter de escape, que sinaliza ao javascript que é um código unicode, não string de texto normal

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


// Métodos prontos
// .toLowerCase(); -> deixa todos caracteres minúsculos

const cor1 = "Azul";
const cor2 = "azul";
const comparacao = (cor1 == cor2);
console.log("cor 1: ",cor1);
console.log("cor 2: ",cor2);
console.log("comparacao: ",comparacao);
console.log("Nova cor 1: ",cor1.toLowerCase());
const comparacao2 = (cor1.toLowerCase() == cor2);
console.log("Comparacao 2: ",comparacao2);


// length -> tamanho da lista de caracteres
console.log("Tamanho de ",cor1,": ",cor1.length);

// mais métodos de string em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos