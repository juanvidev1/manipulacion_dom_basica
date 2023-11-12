console.log('Hello, world');

/**
 * Hya varias formas de acceder a los elementos del DOM. Una de las más sencillas es querySelector, ya que permite acceder a los elementos utilizando una sintaxis similar a css
 */
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const parrafo2 = document.querySelector('#parrafo2');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    parrafo2,
    input
});

// h1.innerHTML = 'Patito <br> Feo'; // innerHTML permite agregar código html; sin embargo no es algo muy seguro en materia cibernética
h1.innerText = 'Patito Feo'; // innerText permite agregar texto plano; es más seguro

input.value = '456'; // Al parecer js siempre va a pesar sobre lo que tenga el html.

console.log(document.createElement('span'));
const img = document.createElement('img');
img.setAttribute('src', 'https://picsum.photos/200/300');
console.log(img);
parrafo2.innerText = '';
parrafo2.append(img);