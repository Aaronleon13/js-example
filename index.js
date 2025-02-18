function cambiarColor(nombre) {
    const titulo = document.querySelector('h1');    
    titulo.classList.add(nombre);
    setTimeout(() => {       
        titulo.classList.remove('titulo');
    }, 3000);
    
     
}

const titulo = document.querySelector('#saludo');
const h = document.querySelector('h1');
const hs = document.querySelectorAll('h1');


const boton = document.querySelector('button');
boton.addEventListener('click', cambiarColor('titulo'));
boton.addEventListener('mouseenter', cambiarColor);



console.log(5 + '5');

