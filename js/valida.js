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

//   var ramdom = document.getElementById("numeros").innerHTML
//   console.log(Math.floor)
//   function getRandomInt(min, max) {
//     const random = (min, max) => Math. floor (Math. random () * (max - min) + min);
// console. log (random (5, 10));
//   }

  (function() {
    const random = (min, max) => Math.floor(Math.random() * (min + max) + min);
    console.log(random(1001, 9998)); 
  })();