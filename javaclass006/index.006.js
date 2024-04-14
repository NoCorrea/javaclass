var a = document.getElementById ('area')
a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout',sair)
function clicar() {
a.textContent = 'clicou'
a.style.background ='red'
}
/*pode ser usado o 'textContent' acima, ou o 'innerText' abaixo para mudar o texto da div*/
function entrar() {
    a.innerText = 'entrou'  
}
function sair() {
    a.innerText = 'saiu' 
    a.style.background ='green' 
}

