const h1 = document.querySelector('h1');
const form  = document.getElementById('form');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('btnEnviar');
const pResult = document.getElementById('pResult');

form.addEventListener('submit', concatenarInputValues);

function concatenarInputValues(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + ' ' + input2.value;
    pResult.innerText = "Entonces qué " + sumaInputs +"?";
}