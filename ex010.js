function calcular() {
  var txtv = window.document.getElementById('txtvel')
  var res = window.document.querySelector('div#res')
  var vel = Number(txtv.value)
  res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> km/h</p>`
  if (vel > 60) {
    res.innerHTML = `Você está <strong>multado</strong> por excesso de velocidade`
  }
  res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}