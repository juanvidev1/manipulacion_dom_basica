/**
 * Hay varias formas de acceder a los elementos del DOM. Una de las más sencillas es querySelector, ya que permite acceder a los elementos utilizando una sintaxis similar a css
 */
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');
const btnSumar = document.querySelector('#btnSumar');
const btnRestar = document.querySelector('#btnRestar');
const btnMultiplicar = document.querySelector('#btnMultiplicar');
const btnDividir = document.querySelector('#btnDividir');


// h1.innerHTML = 'Patito <br> Feo'; // innerHTML permite agregar código html; sin embargo no es algo muy seguro en materia cibernética
//h1.innerText = 'Patito Feo'; // innerText permite agregar texto plano; es más seguro


// Esta función ejecuta la acción que queremos aplicar en nuestra página. Hay dos formas de llamarla. Directamente desde el html con un atributo onclick o utilizando un event listener
function btnSuma() {
    const sumaInputs = Number(input1.value) + Number(input2.value);
    h1.innerText = 'Resultado: ' + sumaInputs;
}

function btnResta() {
    const restaInputs = Number(input1.value) - Number(input2.value);
    h1.innerText = 'Resultado: ' + restaInputs;
}

function btnMultiplicacion() {
    const multiplicacionInputs = Number(input1.value) * Number(input2.value);
    h1.innerText = 'Resultado: ' + multiplicacionInputs;
}

function btnDivision() {
    const divisionInputs = Number(input1.value) / Number(input2.value);
    h1.innerText = 'Resultado: ' + divisionInputs;
}

btnSumar.addEventListener('click', btnSuma); // Esto permite llamar la función desde este archivo js y no llamándola desde el html (se elimina el atributo onclick de la etiqueta button)
btnRestar.addEventListener('click', btnResta);
btnMultiplicar.addEventListener('click', btnMultiplicacion);
btnDividir.addEventListener('click', btnDivision);