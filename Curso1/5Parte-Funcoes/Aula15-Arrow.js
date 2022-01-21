// Terceira forma de escrever função. 
let nome = "Giane";
const Apresentar = nome => {
    return `Meu nome é ${nome}`;
};

// Arrow function veio em ES6!
// Não pode ser nomeada. Sempre vem com a const e nome da variável que vai usar. Ela pode ser usada como objeto, entre outros.

const Bhaskara = (a,b,c) => {
    let delta = Math.pow(b,2) - 4*a*c;
    if(delta < 0) return "não tem";
    else{
        const raiz1 = [-b + Math.sqrt(delta)]/2;
        const raiz2 = [-b - Math.sqrt(delta)]/2;
        return `As raízes são ${raiz1} e ${raiz2}`;
    } 

}

console.log(Bhaskara(2,-6,0))
// const NomeDaFuncao = Parâmetros => {conteúdo da função}

//console.log(Apresentar("algo"));