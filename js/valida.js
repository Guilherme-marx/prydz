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

// ideia - addEventListener











