let num = [10, 9] 
let menor = num[0] 
  
function Crie(pos){
    if(pos >= num.length){
       return "nada" 
    }
    return num[pos]
} 

 console.log(Crie(1))
 console.log(Crie(0))