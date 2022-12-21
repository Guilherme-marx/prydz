// function matchpass(){
//     var firstpassword=document.f1.password.value;
//     var secondpassword=document.f1.password2.value;

//     if(firstpassword==secondpassword){
//         return true;
//     }
// else{
//     alert("as senhas não combinam");
//     return false;
//     }
// }


// function matchpass(){
//     var firstpassword=document.f1.password.value;
//     var secondpassword=document.f1.password2.value;
    
//     if(firstpassword==secondpassword){
//     return true;
//     }
//     else{
//     alert("password must be same!");
//     return false;
//     }
//     }

window.addEventListener("load", function () {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passwordRepeat = document.getElementById('passwordRepeat');
    const reveal = document.getElementById('reveal')
    const revealPasswordRepeat = document.getElementById('reveal2')
    const name = document.getElementById('name')
    const lastName = document.getElementById('last_name')
    const profile = document.getElementById('profile')

    // Validación - Blur

    name.addEventListener('blur', e => {
        validarName();
    })
    lastName.addEventListener('blur', e => {
        validarLastName();
    })

    email.addEventListener('blur', e => {
        validarEmail();
    })

    password.addEventListener('blur', e => {
        validarPassword();
    })

    passwordRepeat.addEventListener('blur', e => {
        validarPasswordRepeat();
    })

    // profile.addEventListener('blur', e => {
    //     validarProfile();
    // })

    //Ver password

    reveal.addEventListener('click', function() {
        password.type = password.type == 'password' ? 'text' : 'password';
    })

    revealPasswordRepeat.addEventListener('click',function(){
        passwordRepeat.type = passwordRepeat.type == 'password' ? 'text' : 'password'
    })

      // Validación - Submit

    form.addEventListener('submit', e => {
        let errores = []
        if (validarName() == false) {
            errores.push('El nombre debe contener al menos 2 caracteres');
        };
        if (validarLastName() == false) {
            errores.push('El apellido debe contener al menos 2 caracteres');
        }
        if (validarEmail() == false){
            errores.push('El email ingresado no es válido');
        };
        if (validarPassword() == false) {
            errores.push('La contraseña debe tener al menos 6 caracteres válidos');
        }
        if (validarPasswordRepeat() == false) {
            errores.push('La contraseña debe coincidir');
        };
        // if (validarProfile() == false) {
        //     errores.push('Seleccione una imagen');
        // }
        if (errores.length > 0) {
            e.preventDefault();
        }
    })

    // Funciones auxiliares (Helpers)

    function validarName() {
        if (name.value === '') {
            setError(name, 'Este campo es obligatorio');
            return false;
        } else {
            if (validator.isAlpha(name.value) && validator.isLength(name.value, {min:2, max:20})) {
                setSuccess(name);
                return true;
            } else {
                setError(name, 'El nombre ingresado no es válido');
                return false;  
            }}
    }

    function validarLastName() {
        if (lastName.value === '') {
            setError(lastName, 'Este campo es obligatorio');
            return false;
        } else {
            if (validator.isLength(lastName.value, {min:2, max:20})) {
                setSuccess(lastName);
                return true;
            } else {
                setError(lastName, 'El apellido ingresado no es válido');
                return false;  
            }
    }}


    function validarEmail() {
        const valorEmail = email.value.trim(); // Usamos trim para sacar los espacios en blanco
        if (valorEmail === '') {
            setError(email, 'Este campo es obligatorio');
            return false;
        } else 
        if (!esEmail(valorEmail)) {
            setError(email, 'El email ingresado no es válido');
            return false;
        } else 
        if (validarEmailAPI(valorEmail)) {
            setError(email, 'El email utilizado ya se encuentra en uso');
            return false;
        } else {
            setSuccess(email);
            return true;
        }
    }

    function validarPassword() {
        const valorPassword = password.value.trim().length;
        if (valorPassword <= 5) {
            setError(password, 'La contraseña debe tener al menos 6 caracteres válidos');
            return false;
        } else {
            setSuccess(password);
            return true;
        }
    }

    function validarPasswordRepeat() {
    if (passwordRepeat.value === '') {
            setError(passwordRepeat, 'Este campo es obligatorio');
            return false;
        }else{
            if (validator.equals(passwordRepeat.value,password.value )  
            ){
                setSuccess(passwordRepeat);
                return true;
            }else{       
                setError(passwordRepeat, 'Las contraseñas deben coincidir');
                return false;
            }
    }}

    function validarEmailAPI(email) {
        fetch('http://localhost:3001/api/usuarios/check?email=' + email)
        .then(response => response.json())
        .then(json => {
            if(json.status == '404') {
                return false;
            } else {
                return true;
            }
        })
		.catch(error => console.log(error))
    }

    function setError(input, error) {
        const parentElement = input.parentElement;
        let small = parentElement.querySelector('small');
        parentElement.className = 'form-control error';
        small.innerText = error;
    }
    
    function setSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function esEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

})

