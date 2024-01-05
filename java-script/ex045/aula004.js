function* perguntas(){
  const nome =    yield 'Qual o seu nome: '
   yield ' Então vai pra fila'
    return nome
}

const res = perguntas()

console.log(res.next().value)

console.log(res.next('Mateus').value)



/*cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc = cores()
for(let i = 0; i <= 2; i++){
  console.log(itc.next().value) 
}
*/
