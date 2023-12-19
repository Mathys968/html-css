
function Conf(){
let totalAlu = document.querySelector('input#totA')
let cont = 1
let numDeAlun = document.getElementById('numDeAlun')

if(cont <= Number(totalAlu.value)){
   while(cont <= Number(totalAlu.value)){
numDeAlun.innerHTML += `ALUNO ${cont} <br> <p>Nome do Aluno: <input type="text" name="nom" id="nome"> <br>" <input type="button" value="Confirmar" id="bro" onclick="Conti()">>
<p id="res"></p>`
cont++
} 

}

}
function Conti(){
let nome = document.getElementById('nome')
let qtd = []
let res = document.getElementById('res')
qtd.push(nome.value)
res.innerHTML += `Nota de ${nome.value}`
}
