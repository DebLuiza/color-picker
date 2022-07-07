window.addEventListener('load', start);

function start() {
    preventFormSubmit();
    myColour();
  }
  function preventFormSubmit() {
    function handleFormSubmit(event) {
      event.preventDefault();
    }
    var form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
  }

function myColour() {

    // pegando os valores do id 
    var barra_vermelho = document.querySelector('#red').value;
    var barra_verde = document.querySelector('#green').value;
    var barra_azul = document.querySelector('#blue').value;
    // colorindo o background com as variaveis acima
    var colour = 'rgb(' + barra_vermelho + ',' + barra_verde + ',' + barra_azul + ')';
    document.body.style.backgroundColor = colour;

    document.querySelector('#box').value = barra_vermelho;
    document.querySelector('#box1').value = barra_verde;
    document.querySelector('#box2').value = barra_azul;
    // caixinha dos numeros
  
}
  // add event listener 
  document.querySelector('#red')
  .addEventListener('input', myColour);

document.querySelector('#green')
  .addEventListener('input', myColour);

document.querySelector('#blue')
  .addEventListener('input', myColour);