/*let n1 = {Boa:"Bom", Bom:"HEHEHE"}
let n2 ={Boa:"Bom", Thanks:"h12"}
let n3= {...n1, ...n2}

console.log(`n1: ${Object.keys(n1)}`)
console.log(`n2: ${Object.keys(n2)}`)
console.log(`n3: ${Object.keys(n3)}`)
*/
/*
Spread//
function Ssoma(v1, v2, v3){
    return v1 * v2 * v3
}
let num = [12, 2, 5]
console.log(num)
console.log(Ssoma(...num))*/
let par = 0
for(let i = 0; i < 1000; i++){
    console.log(i)
    if(i%2 == 0){
            par++
    }
}

console.log(par)
console.log(par)