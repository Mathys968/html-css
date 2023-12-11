function Contar(){
    var inici = document.getElementById('ini')
    var inicio = Number(inici.value) 
    var fi = document.getElementById('fim')
    var fim = Number(fi.value)
    var pass = document.getElementById('passo')
    var passo = Number(pass.value)
    var  res = document.getElementById('res')
    res.innerText = 'Contando: '
   for(let c = inicio; c <= fim; c+= passo){
    
    res.innerHTML += `${c} \u{1F628}`
   }
}
/*
var n1 = 0
var n2 = 100
while(n1 < n2){
    n1++
    console.log(n1)
}*/