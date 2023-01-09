function validarEmail(nome3, nome4) {
  const email1 = document.getElementById(nome3).value;
  const email2 = document.getElementById(nome4).value;
  const cmp = email1 === email2
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