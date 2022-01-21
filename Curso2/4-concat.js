//Desafio: Juntar as salas. Há uma palestra para alunas de JS e python, por isso, deve-se juntar ambas as salas em uma única lista

const pessoas = ['João','Juliana','Ana','Caio','Lara','Marjorie','Guilherme','Aline', 'Fabiana', 'Andre', 'Carlos','Paulo','Bia','Vivian', 'Isabela','Vinicius','Renan','Renata', 'Daisy','Camilo'];
// coloquei assim pq estava com preguiça de adicionar novos nomes.
const sala1 = pessoas.slice(0,pessoas.length/2);
const sala2 = pessoas.slice(pessoas.length/2);

const salasjuntas = sala1.concat(sala2);
console.log(salasjuntas);