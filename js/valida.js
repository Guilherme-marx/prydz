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
  function getRandomInt(max) {
    return Math.floor(Math.random(1001) * 8999);
  }
  
  console.log(getRandomInt()+1000);