const pessoas = ['João','Juliana','Ana','Caio','Lara','Marjorie','Guilherme','Aline', 'Fabiana', 'Andre', 'Carlos','Paulo','Bia','Vivian', 'Isabela','Vinicius','Renan','Renata', 'Daisy','Camilo'];

// Dividiremos em turma A e turma B, com mesmo tamanho.

const sala1 = pessoas.slice(0,pessoas.length/2); //pega até pessoas.length/2-1

const sala2 = pessoas.slice(pessoas.length/2); //Se for o final da lista, n precisa colocar um índice. Onde termina é exclusiva!

console.log(`Turma 1: ${sala1}
Turma 2: ${sala2}`);

