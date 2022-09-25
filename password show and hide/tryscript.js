let input = document.querySelector('.pswrd');
let show = document.querySelector('.show');
show.addEventListener('click', function(){
    if(input.type === "password"){
        input.type = 'text';
        show.textContent = 'HIDE';
        show.style.color = 'green'
    }else{
        input.type = 'password';
        show.textContent = 'SHOW';
        show.style.color = 'black'
    }
})