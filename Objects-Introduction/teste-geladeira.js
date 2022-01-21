const geladeira = {
    cor:null,
    estoque:null,
    comidas:null
}

const gelBrastemp = Object.create(geladeira);

gelBrastemp.cor = "preto";
gelBrastemp.estoque = 453;
gelBrastemp.comidas = ["maçã", "pão"];

const gelEletrolux = Object.create(geladeira);
gelEletrolux.cor = "rosa";
gelEletrolux.estoque = 7;
gelEletrolux.comidas = ["peixe"];

console.log(geladeira, gelEletrolux, gelBrastemp);