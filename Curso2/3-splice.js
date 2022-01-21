//Desafio: Atualizar elementos
// Crie uma lista de chamada com os seguintes alunos: 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'.
// Ana e Caio mudaram de escola e Rodrigo entrou na sala.

const alunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
alunos.push('Rodrigo');
alunos.splice(1,2);
//1° parâmetro: A partir de qual índice?
//2° parâmetro: Remover quantos índices?
//3° parâmetro: Quer colocar algum elemento no lugar?
alunos.sort();
console.log(alunos);


//Outra forma é a seguinte:
const alunos2 = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
alunos2.splice(1,2,'Rodrigo');
alunos2.sort();
console.log(alunos2);

// Pode ser utilizado para adicionar um item depois de um específico, por exemplo, quero adicionar Giane depois de Marjorie
alunos2.splice(4,0,'Giane');
// O segundo parâmetro é 0, então não retirará nenhum valor
console.log(alunos2);