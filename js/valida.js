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

  var ramdom = document.getElementById("numeros").innerHTML
  console.log(Math.floor)
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * 1000);
  }


// var valide = document.getElementById("numeros").innerHTML = ''
// console.log('value', value) teste