
const menumobile = document.querySelector('.nav-list-mobile')
const botao = document.querySelector('.fa-bars')

function menuVizivel(){
    menumobile.classList.toggle('active')

    if(botao.classList.contains('fa-bars')){

        botao.classList.remove('fa-bars')
        botao.classList.add('fa-x')
    }else{
        botao.classList.remove('fa-x')
        botao.classList.add('fa-bars')
    }


}
    botao.addEventListener('click', menuVizivel)


