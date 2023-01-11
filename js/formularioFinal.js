const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expressao = {
    password: /^.{4,16}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    password: false,
    email: false
}
const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'password':
            validarCampo(expressao.password, e.target, 'password');
            validarPassword2();
            break;

        case 'password2':
            validarPassowd2();
            break;

        case 'email':
            validarCampo(expressao.email, e.target, 'email');
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