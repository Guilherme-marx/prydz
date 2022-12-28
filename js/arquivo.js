let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form');
let textForm = document.getElementById('texForm')
// let textEmail = document.getElementById('texEmail')
// let textPassword = document.getElementById('textPassword')
// let ReEmail = document.getElementById('ReEmail')

form.addEventListener('submit' , (e) => {
    if(email.value == '' && password.value == '') {
        textForm.textContent = 'você precisa preencher todos os campos'
    } else if(validatorEmail(email.value) === true && validatorPassword(passworde.value) === true) {
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
    if(validatorEmail(email.value) !== true) {
        textEmail.textContent = 'insira um email valido -- Ex: abc@emial.com --'
    }
})

password.addEventListener('keyup' , () => {
    if(validatorPassword(password.value) !== true){
        textPassword.textContent = ' a senha deve conter no minimo 8 caracteres'
    }
})

function validatorEmail(email) {
    let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    return emailPattern.test(email)
}

function validatorPassword(password) {
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    return passwordPattern.test(password)
}
// function validatorReEmail(ReEmail) {
//     let ReEmailpattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ 
//     return ReEmailPattern.test(ReEmail)
// }
//--------------------------------------------------------------------------------


function validarSenha(nome1, nome2) {
    var password = document.getElementById(nome1).value;
    var checkPassword = document.getElementById(nome2).value;
    console.log(checkPassword);
    if (password != "" &&
      checkPassword != "" &&
      password === checkPassword) {
      alert('senha iguais');
    } else {
      alert('senhas diferentes');
    }
  }
