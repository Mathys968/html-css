function Adicionar(){
 var num = document.getElementById('num')
 var nume = Number(num.value)
 var text = document.getElementById('bro')
 if(nume == '0' && nume == nada){
    window.alert('BROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
 } else{
    text.innerHTML += `\n Valor ${nume} adicionado`
 }
 
}