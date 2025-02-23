function cambiarColor() {
    const titulo = document.querySelector('h1');    
    titulo.classList.add('titulo');
    setTimeout(() => {       
        titulo.classList.remove('titulo');
    }, 1000);
    
     
}

const titulo = document.querySelector('#saludo');
const h = document.querySelector('h1');
const hs = document.querySelectorAll('h1');


const boton = document.querySelector('button');
boton.addEventListener('click', cambiarColor('titulo'));
boton.addEventListener('mouseenter', cambiarColor);

class Carro {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }
}

const carro = new Carro('Toyota', 'Corolla', 'Rojo');
console.log(carro.color);