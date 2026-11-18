const logoContainer = document.querySelector('.logo-container');
const navToggler = document.querySelector('.toggler-btn');
const togglebtnclose = document.querySelector('.toggle-btn-close');

navToggler.addEventListener('click', function(){
    logoContainer.classList.add('logo-cont');
    // logoContainer.classList.remove('onclicking');
});

togglebtnclose.addEventListener('click', () =>{
    logoContainer.classList.remove('logo-cont');
    // logoContainer.classList.add('onclicking');
    
});