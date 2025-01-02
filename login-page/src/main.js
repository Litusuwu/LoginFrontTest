// import './style.css'

const input = document.getElementById('emailI');
const label = document.getElementById('usuarioL')

function applyStylesInput(){
    label.style.color = '#00498b';
    // label.style.transform = 'scale(1.1, 1.1)';
    label.style.transform = 'translate(2px,-13px) scale(0.7)';
    label.style.zIndex ='1111';
    label.style.paddingRight = '0.5rem';
    input.style.color = '#042354';
}
input.addEventListener('focus', ()=>{
    applyStylesInput();
});
input.addEventListener('input', ()=>{
    applyStylesInput();
});

input.addEventListener('blur', ()=>{
    if(!input.target.is(':valid')){
        label.style.color = 'black';
        label.style.transform = 'none';
        // label.style.backgroundColor = 'blue';    
    }
});

