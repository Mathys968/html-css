function Adici(){
    let hp = document.getElementById('hp')
    let lp = document.getElementById('lp')
    let ha = document.getElementById('ha')
    let la = document.getElementById('la')
    let res = document.getElementById('res')
    let valor = (Number(hp.value)*Number(lp.value))/(Number(ha.value)* Number(la.value))
    res.innerHTML = ''
    res.innerText += `A quantidade de azulejos necessarios para a construção será ${valor}`
}