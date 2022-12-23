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


const form = document.getElementeById('.required');
const campos = document.getSelectorAll('.required');
const spans = document.quierySelectorAll(".required");
// const passwordRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'bolck';
}


function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

    function passwordValidate() {

        var numeros = /([0-9])/;
        var alfabeto = /([a-z, A-Z])/;
        var chEspeciais = /([~,!,@,#,$,%,&,*,-,_,+,=,?,>,<])/;

        const valorPassword = password.value.trim().length;
        if (passwordValue <= 8) {
            $('#password-status').html("<pan style='color:red'> fraco, insira no minimo 8 caracteres</span>");
            // setError(password, 'sua senha precisa ter mais de 8 caracteres');
            return false;
        } 
        // 
       else {  	
            if($('#password').val().match(numeros) && $('#password').val().match(alfabeto) && $('#password').val().match(chEspeciais))
            {            
                $('#password-status').html("<span style='color:green'><b>Forte</b></span>");
            } else {
                $('#password-status').html("<span style='color:orange'>Médio, insira um caracter especial</span>");
            }
        
    }
}


    function validatePasswordRepeat() {
        if (passwordRepeat.value === '') {
            setError(passwordRepeat);

        }
    }
