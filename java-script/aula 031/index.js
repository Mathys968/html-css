 var num = document.getElementById('num')
 var text = document.getElementById('bro')
 var arm = []
let res = document.querySelector('p#res')
function Numbert(n){
   if(Number(n) >= 1 && Number(n) <=100){
   return true
} else {
   return false
}
}

function caixa(n, l){
if(l.indexOf(Number(n)) != -1){
   return true
}else{
   return false
}
}

function Adicionar(){
 if(Numbert(num.value) && !caixa(num.value, arm)){
    arm.push(Number(num.value))
 text.innerHTML += `\n Foi adicionado o número ${num.value}`
   res.innerHTML = ''
   } 
 else{
    window.alert('BROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
 }
}

function Finalizar(){
   let maior = arm[0]
   let menor = arm[0]
   let soma = 0
   let media = 0
   let tot = arm.length
   res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
   for(let pos in arm){
      soma += arm[pos]
      media = soma/tot
      if(arm[pos] > maior)
      maior = arm[pos]
   if(arm[pos] < menor)
   menor = arm[pos]
   }
    res.innerHTML += `<p>O maior número é o ${maior}</p>`  
    res.innerHTML += `<p>O menor número é o ${menor}</p>`  
    res.innerHTML += `<p>A média dos números é ${media}</p>`  
    res.innerHTML += `<p>A soma dos números é ${soma}</p>`  
}

