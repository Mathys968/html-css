let medalha = ["nada","ouro", "prata", "bronze", "nada"]
function medalhaDeAcordoComPosto(numero){
    if(numero >= medalha.length){
        return "nada"
    }
     return medalha[numero]
    
}

console.log(medalhaDeAcordoComPosto(1))
console.log(medalhaDeAcordoComPosto(2))
console.log(medalhaDeAcordoComPosto(3))
console.log(medalhaDeAcordoComPosto(4))
console.log(medalhaDeAcordoComPosto(15))
console.log(medalhaDeAcordoComPosto(0))

   

