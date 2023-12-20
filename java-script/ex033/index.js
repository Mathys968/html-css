function Conf(){
  let temp = document.getElementById('temp')
  let cel = Number.parseFloat(temp.value)
  let resul = document.getElementById('resul')  
  let F = cel * 1.8 + 32
  let K =  cel + 273.15
  let Re = cel * 0.8
  let Ra = cel * 1.8 + 32 + 459.67
  resul.innerHTML += `<br> Temperatura em Fahrenheit: ${F}º <br> Temperatura em Kelvin: ${K}º <br> Temperatura em Réaumur: ${Re}º <br> Temperatura em Rankine: ${Ra}º`
}
