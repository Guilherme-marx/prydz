const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expressao = {
    password: /^.{4,16}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
}

const campos = {
    password: false,
    email: false
}
const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'password':
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
            break;

        case 'password2':
            validarPassowd2();
            break;

        case 'email1':
            validarCampo(expresiones.email1, e.target, 'email1');
            validarEmail2();
            break;

        case 'email2':
            validarEmail2();
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario_gurpo-incorreto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario_gurupo-correto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarEmail2 = () => {
    const inputEmail1 = document.getElementById('email1')
    const inputEmail2 = document.getElementById('emial2')

    if (inputEmail1.value !== inputEmail2.value) {
        document.getElementById(`grupo__email2`).classList.add('formulario__grupo-incorreto');
        document.getElementById(`grupo__email2`).classList.remove('formulario__grupo-correto');
        document.querySelector(`#grupo__email2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__email2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__email2 .formulario__input-error`).classList.add('formulario__input-error-ativo');
        campos['email1'] = false;
    } else {
        document.getElementById(`grupo__email2`).classList.remove('formulario__grupo-incorreto');
        document.getElementById(`grupo__email2`).classList.add('formulario__grupo-correto');
        document.querySelector(`#grupo__email2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__email2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__email2 .formulario__input-error`).classList.remove('formulario__input-error-ativo');
        campos['email1'] = true;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('paswword')
    const inputPassword2 = document.getElementById('password2')

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__pasword2`).classList.add('formulario__grupo-incorreto');
        document.getElementById(`grupo__pasword2`).classList.remove('formulario__grupo-correto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-ativo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__pasword2`).classList.remove('formulario__grupo-incorreto');
        document.getElementById(`grupo__pasword2`).classList.add('formulario__grupo-correto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-ativo');
        campos['password'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if (campos.password && campos.password2 && campos.email && campos.email2 && terminos.checked) {
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});

(function () {
    const random = (min, max) => Math.floor(Math.random() * (min + max) + min);
    alert(random(1001, 9998));
})();

function log(msg) {
    const logElem = document.querySelector(".log");
    logElem.innerHTML += `${msg}<br>`;
}

//_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// 


// if (emailValue === '') {
//     setErrorFor(email, "Email não pode estar em branco");
//     status = false;
// } else if (!isEmail(emailValue)) {
//     setErrorFor(email, "Este email não é valido");
//     status = false;
// } else {
//     setSuccessFor(email);
// }

// if (passwordValue === '') {
//     setErrorFor(password, "Senha não pode estar em branco");
//     status = false;
// } else {
//     setSuccessFor(password);
// }

// if (passwordCheck === '') {
//     setErrorFor(password2, "Este campo não pode ficar em branco");
//     status = false;
// } else if (passwordValue !== passwordCheck) {
//     setErrorFor(password2, "As senhas não conferem");
//     status = false;
// } else {
//     setSuccessFor(password2);
// }

// return status;


// function setErrorFor(input, message) {
    // const formGroup = input.parentElement;                           //  .form-group
    // const small = formGroup.querySelector('Pequeno');

    // add error message inside small
    // small.innerText = message;

    // add error class
    // formGroup.className = 'Erro no formulario';
// }

// function setSuccessFor(input) {
    // const formGroup = input.parentElement;                           // .form-group
    // formGroup.className = 'Envio de formulariocom sucesso';
// }

// function isEmail(email) {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }














// comparar

//      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

// coparar 

//    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);











//  testear

//function verificaForcaSenha() {
//    const numeros = /([0-9])/;
//    const alfabeto = /([a-zA-Z])/;
//    const chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
//    if ($('#password').val().length < 6) {
//        $('#password-status').html("<span style='color:red'>Fraco, insira no mínimo 6 caracteres</span>");
//    } else {
//        if ($('#password').val().match(numeros) && $('#password').val().match(alfabeto) && $('#password').val().match(chsp    eciais)) {
//            $('#password-status').html("<span style='color:green'><b>Forte</b></span>");
//        } else {
//            $('#password-status').html("<span style='color:orange'>Médio, insira um caracter especial</span>");
//        }
//    }
//}