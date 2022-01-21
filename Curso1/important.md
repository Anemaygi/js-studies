# Tipagem de funções

## Checagem de tipos

### Linguagens estaticamente tipadas

A pessoa precisa informar explicitamente o tipo de cada dado utilizado no sistema. Quando define-se o tipo, as variáveis estão restritas ao tipo declarado.
A checagem de tipos serve para minimizar a possibilidade de erros causados por tipos de dados errados.

Por exemplo, um programa recebe string ao invés de números para somar.

<b>Inefecência de tipo: </b> Técnica que o programa consegue determinar sozinho o tipo da variável sem deixar explícito no código, mas, ainda assim, a checagem de erros ocorre.

### Linguagens dinamicamente tipadas

O tipo é determinado em runtime de acordo com o valor, não da variável.

O programa vê qual tipo de dado a variável recebe e, a partir disso, determina a tipagem. Não precisa explicitar o tipo.

## "Força" da tipagem

### Tipagem fraca

Uma de suas características é a <b>conversão explícita</b>. Linguagens com tipagem fraca, geralmente, fazem uma conversão implícita de valor. Isso significa que, caso você passe um int onde deveria ser string, ele fará uma conversão (que não precisa ser explicitada por você)

### Tipagem forte

Em contrapartida, a tipagem forte não permite que o usuário insira uma variável com dado de um tipo no local que deveria ser outro.

# High Order Functions

<i>Uma high order function é uma função que recebe uma outra como argumento ou que retorna outra função</i>

Funções que são chamadas dentro de outra são chamadas callback functions, pois são “called back” (“chamadas de volta” em uma tradução livre) dentro da função onde estão compostas.
