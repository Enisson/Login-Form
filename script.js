

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

