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

/  PARA AVALIAR EM CASA QUAL FAZ MAIS SENTIDO PARA A VALIDAÃO DO FORMULARIO!!!! /


//   email.addEventListener('keyup' , ( ) => {
//       if(validarEmail(email.value) !== true) {
//           textEmail.textContent = 'insira um email valido -- Ex: abc@emial.com --'
//         }
// })

// function validarEmail(email) {
//     let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    
//     return emailPattern.test(email)
// }

// function validarEmail(field) {
//     usuario = field.value.substring(0, field.value.indexOf("@"));
//     dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
//     if ((usuario.length >=1) &&
//     (dominio.length >=3) &&
//     (usuario.search("@")==-1) &&
//         (dominio.search("@")==-1) &&
//         (usuario.search(" ")==-1) &&
//         (dominio.search(" ")==-1) &&
//         (dominio.search(".")!=-1) &&
//         (dominio.indexOf(".") >=1)&&
//         (dominio.lastIndexOf(".") < dominio.length - 1)) {
//     document.getElementById("email").innerHTML="E-mail válido";
//     alert("email valido");
// }
// else{
//     document.getElementById("email").innerHTML="<font color = 'red'>E-mail inválido </font>";
//     alert("E-mail inválido");
// }
// }

// form.addEventListener('submit' , (e) => {
//   if(email.value == '' && password.value == '') {
//       textForm.textContent = 'você precisa preencher todos os campos'
//   } else if(validarEmail(email.value) === true && validarPassword(passworde.value) === true) {
//       textForm.textContent = '';
//       textEmail.textContent = '';
//       textPassword.textContent = '';
//   }
  
//   else {
//       console.log('preencha todos os campos');
//   }

//   e.preventDefault()
// })


//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------














//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------