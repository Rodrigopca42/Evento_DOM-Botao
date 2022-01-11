var a = window.document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Legal! você clicou'
    a.style.background ='red'
}

function entrar(){
    a.innerText = 'Legal! você entrou.'
}

function sair(){
    a.innerText= 'Mas, já vai embora?'
    a.style.background = 'green'
}