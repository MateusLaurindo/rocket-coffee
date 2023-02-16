function clicou (){
  const botaoAbrir = document.getElementById('botao-abrir')
  const botaoFechar = document.getElementById('botao-fechar')

  if(botaoFechar.innerHTML === `<img src="./img/menu-buguer-close.svg">`){
    botaoFechar.innerHTML = ''
  }else{
          botaoFechar.innerHTML = `<img src="./img/menu-buguer-close.svg">`
      }
    botaoAbrir.classList.toggle('abrir')
  }
  