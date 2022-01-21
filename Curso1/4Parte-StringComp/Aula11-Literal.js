// Template strings
// É possível concatenar strings

const nome ="Giane";
const idade = 18;
const cidade = "SP";

let apresentacao = "meu nome é "+nome+" e a idade é "+idade;
console.log(apresentacao);

// Colocar o símbolo de ${} para colocar a template string
// para utilizá-lo, utilize o acento gráfico (`)

apresentacao = `meu nome é ${nome}, idade de ${idade} e moro em ${cidade}`;
console.log(apresentacao);

const pedido = `${nome} diz: "Eu moro ${idade >= 20 ? "sozinha":"com meus pais"}"`;
console.log(pedido);