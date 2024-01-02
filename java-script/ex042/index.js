let num = [2, 3, 12, 12, 32]
function Media(vum){
   
    for(let pos in num){
        vum += num[pos]
    }
    let tamanho = vum/num.length
    console.log(`A média dos números no Array será ${tamanho}`)
}
console.log(Media(0))
