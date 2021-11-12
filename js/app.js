
function btnInteraction(){
    const btnSign = {
        in: document.querySelector('.signin'),
        up: document.querySelector('.signup')
    }

    const body = document.querySelector('body');

    function signClassIn(){
        body.classList.remove('sign-up-js')
        body.classList.add('sign-in-js')
    }

    function signClassOut(){
        body.classList.remove('sign-in-js')
        body.classList.add('sign-up-js')
    }

    btnSign.in.addEventListener('click', signClassIn);

    btnSign.up.addEventListener('click', signClassOut)
};

btnInteraction();

function underlineAction(){
    const evento = document.querySelectorAll('.js-btn');
    const underline = document.querySelectorAll('.underline');

    function activeClass(eve){
        underline.forEach(event => {
            event.classList.remove('active')
        })
        underline[eve].classList.add('active')
    }

    evento.forEach( (index, cont) => {
        index.addEventListener('click', () => {
            activeClass(cont);
        }) 
        
    })
};

underlineAction();