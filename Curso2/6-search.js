// Procurar na Lista
// Criar uma função que recebe como argumento o nome de um aluno
// Verificar se o aluno está presete na lista e retornar a média final que se encontra no mesmo indíce
// Caso o nome do aluno não esteja na lista, aluno nn encontrado.
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10,8,7.5,9];

const mediasPerAluno = [alunos, medias];

let nome = 'Juliana';
const especifico = (valor) =>{
    return valor == nome;
}

let indice2;
const exibeNota = (nomedoAluno) => {
    if(mediasPerAluno[0].includes(nomedoAluno)){
        indice2 = mediasPerAluno[0].indexOf(nomedoAluno);
        console.log(`Nota de aluno específico:
${mediasPerAluno[0][indice2]} ${mediasPerAluno[1][indice2]}`);
    }
    else{
        console.log(`O aluno(a) ${nomedoAluno} não foi encontrado`);
    }
    // includes vê se o que a gente está procurando está dentro da lista. O includes faz uma busca por valor! 
    // IndexOf traz o número do indíce que estamos procurando!
}

exibeNota('Giane');
exibeNota('Juliana');
/*
let indice = mediasPerAluno[0].findIndex(especifico);

if(indice != -1){
console.log(`Nota de aluno específico:
${mediasPerAluno[0][indice]} ${mediasPerAluno[1][indice]}`);
}
else{
    console.log("O aluno especificado não foi encontrado");
}*/