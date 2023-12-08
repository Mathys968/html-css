/*1
function parimp(n){
if (n%2 == 0){
    return 'par'
}else{
    return 'impar'}
}
let res = parimp(10)
console.log(res)*/
/* 2
function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma(5))
*/
/* 3
let v = function(x){
    return x*2
}
console.log(v(5))
*/
/* 4
function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))
*/

let amigo = {nome: 'Mateus', sexo: 'M', peso: 85.4, engordar(p){
    console.log('Engordou')
    this.peso += p
}}
