/*
MAAP
const cursos = 
[
{nome: 'CSS', custo: 43},
{nome: 'JS', custo: 221},
{nome: 'HTML', custo: 21}
];
const nomes = cursos.map(elementos => elementos.nome);
const custo = cursos.map(elementos => elementos.custo);
console.log(custo)

console.log(cursos)

const duplicata = cursos.map((x, i) => {
console.log(x)

})
*/




/* FILTER
const cursos = 
[
{nome: 'CSS', custo: 43},
{nome: 'JS', custo: 221},
{nome: 'HTML', custo: 21}
];

const cust = cursos.filter(nome => nome.nome === 'CSS').map(name => name.nome)
console.log(cust)
*/





/* REDUCE
const cursos = 
[
{nome: 'CSS', custo: 43},
{nome: 'JS', custo: 221},
{nome: 'HTML', custo: 21}
];

const total = cursos.reduce((acc, p) => acc+ p.custo, 0)
console.log(total)*/