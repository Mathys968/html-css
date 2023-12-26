function Sair(){
    let raio = document.querySelector('input#raio')
    let altu = document.getElementById('altu')
    let n = 3.14159
    let resultado = n * Number(raio.value) * Number(raio.value) * Number(altu.value)
    let res = document.getElementById('res')
    res.innerHTML = ''
    res.innerHTML += `O volume da lata de óleo é ${resultado}`
}