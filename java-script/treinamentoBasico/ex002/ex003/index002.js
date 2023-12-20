
function Conf(){
let totalAlu = document.querySelector('input#totA')
let numDeAlun = document.getElementById('numDeAlun')
let nome = document.getElementById('nome')
let name = []
let nota = document.getElementById('nota')
for(let cont = 1; cont <= Number(totalAlu.value); cont++){
numDeAlun.innerHTML += 
`ALUNO ${cont} <br> 
<section id="BACK">
   
   <form action="post">
   
      <p> <label for="nome">Nome do Aluno: </label>
      <input type="text" name="nom" id="nome"> </p>
   
      <p> <label for="nota">Nota do Aluno :</label>
       <input type="text" name="not" id="nota"></p>

      </form>
      
      </section>`

}
numDeAlun.innerHTML += nome
}

  

function Conti(){ 
let nome = document.getElementById('nome')

let res = document.getElementById('res')
 if(nome.value){
   res.innerHTML += `Nota de ${nome.value}`
   nome.innerHTML += ''
 }
   }