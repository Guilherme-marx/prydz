function validarEmail(nome3, nome4) {
    var email1 = document.getElementById(nome3).value;
    var email2 = document.getElementById(nome4).value;
    console.log(email2);
    if (email1 != "" &&
      email2 != "" &&
      email1 === email2) {
      alert('verifique seu email');
    } else {
      alert('não são o mesmo email');
    }
  }

  form.addEventListener('submit' , (e) => {
    if(email.value == '' && password.value == '') {
        textForm.textContent = 'você precisa preencher todos os campos'
    } else if(validarEmail(email.value) === true && validarPassword(passworde.value) === true) {
        textForm.textContent = '';
        textEmail.textContent = '';
        textPassword.textContent = '';
    }
    
    else {
        console.log('preencha todos os campos');
    }

    e.preventDefault()
})

email.addEventListener('keyup' , ( ) => {
    if(validarEmail(email.value) !== true) {
        textEmail.textContent = 'insira um email valido -- Ex: abc@emial.com --'
    }
})

function validarEmail(email) {
    let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    return emailPattern.test(email)
}