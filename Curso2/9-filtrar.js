// Filtrar por nota
// Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado
// 'Ana', 'Marcos', 'Maria', 'Mauro'
// 7, 4.5, 8, 7.5

const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];
const nomeNota = [nomes,notas];

let media = 6;
const reprovados = nomeNota[0].filter(
    (_, indice)=>nomeNota[1][indice] < 5
);
// quanod tem o _, é para mostrar que tem um parâmetro ali, mas não será utilizado

console.log(reprovados);
