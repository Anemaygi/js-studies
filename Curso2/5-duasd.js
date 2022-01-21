// Lista com duas dimensões
// Alunos: 'João', 'Juliana', 'Caio', 'Ana'
// médias: 10,8,7.5,9
// Lista com duas dimensões

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10,8,7.5,9];

const mediasPerAluno = [alunos, medias];
// Passe como parâmetro duas listas
//console.log(mediasPerAluno[0].length);
//console.log(mediasPerAluno[0][2],mediasPerAluno[1][2]);


const notaAluno = (mediasPerAluno) => {
    for(i = 0; i < mediasPerAluno[0].length; i++){
        console.log(mediasPerAluno[0][i],mediasPerAluno[1][i]);
    }
}
let nome = 'Caio';
const especifico = (valor) =>{
    return valor == nome;
}

let indice = mediasPerAluno[0].findIndex(especifico);
console.log(`Nota de aluno específico:
${mediasPerAluno[0][indice]} ${mediasPerAluno[1][indice]}
`);


console.log(`Média dos alunos`);
notaAluno(mediasPerAluno);
