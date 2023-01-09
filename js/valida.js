function validarEmail(nome3, nome4) {
  const email1 = document.getElementById(nome3).value;
  const email2 = document.getElementById(nome4).value;
  const cmp = email1 === email2
  input.addEventListener('keydown', function(e){
    if (e.keyCode == 13) {
      e.preventDefault();
      return enviar(this.value);
    }
    mostrador.innerHTML = this.value.split('').reverse().join('');
  });
  
  function enviar(texto) {
    enviado.innerHTML =  texto + 'confere';
  }


  if (cmp) {
    alert('true')
    window.location.href('/html/redefinirSenhaPage.html')
  } else {
    alert('false')
    event.preventDefault();
  }
}

const element = document.getElementById('checkPassword');
element.addEventListener('click', myFunction1);
element.addEventListener('click', myFunction2);

function myFunction1() {
  document.getElementById('password')
}

function myFunction2() {
  document.getElementById('email2')
}