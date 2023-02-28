function clicou () {
  const botaoOpen = document.getElementById('botaoOpen')
  const botaoClose = document.getElementById('botaoClose')
  const textoSumir = document.querySelector('.letreiro')
  const listaAberta = document.querySelector('.lista')
  const footerSumir = document.querySelector('footer')
  const sumirCoffee = document.querySelector('.coffee-image')
    
  if(botaoClose.innerHTML === `<img src="./imagens/menu-buguer-close.svg">`) {
    botaoClose.innerHTML = ''
  }else {
    botaoClose.innerHTML = `<img src="./imagens/menu-buguer-close.svg">`
  }
  botaoOpen.classList.toggle('abrir');
  textoSumir.classList.toggle('sumir-texto')
  listaAberta.classList.toggle('lista-aberta')
  footerSumir.classList.toggle('footer-sumir')
  sumirCoffee.classList.toggle('coffee-sumir');
}