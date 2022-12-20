function matchpass(){
    var firstpassword=document.f1.password.value;
    var secondpassword=document.f1.password2.value;

    if(firstpassword==secondpassword){
        return true;
    }
else{
    alert("as senhas não combinam");
    return false;
    }
}


function matchpass(){
    var firstpassword=document.f1.password.value;
    var secondpassword=document.f1.password2.value;
    
    if(firstpassword==secondpassword){
    return true;
    }
    else{
    alert("password must be same!");
    return false;
    }
    }