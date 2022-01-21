// O console é uma ferramenta do node e dos navegadores. É colocado dados para fora da aplicação, não aparece direto ao usuário, mas está lá se necessário.
console.time();
console.log("ei"); // É um registro do console! Pode ser qqr informação

// Os erros que aparecem no programa é feito por outras pessoas no tratamento de erros. Nós que decidimos e fazemos essa parte!

// Olhar a documentação do node sobre console.

console.error("Deu erro");

console.error(new Error("Deu erro"));

// Sempre é bom usar console.log e console.error para receber um constante feedback da aplicação para ver sempre o que está acontecendo. TRATAMENTO DE ERRO!

console.table("Oi"); // Para visualizar informações de forma mais organizada.

console.timeEnd(); // Aberto ali em cima como "console.time()", temporiza o período de uma operação de código ser iniciada e concluída

//console.trace(); // Apresenta a stacktrace de todos os potnos (ou seja, arquivos chamados) por onde o código executado passou durante a execução

// DOCUMENTAÇÃO E EXPLICAÇAÕ: https://nodejs.org/api/console.html
