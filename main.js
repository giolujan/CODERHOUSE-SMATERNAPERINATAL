const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
console.log(button)
button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})