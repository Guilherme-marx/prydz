function validarSenha(nome1, nome2) {
    var password = document.getElementById(nome1).value;
    var checkPassword = document.getElementById(nome2).value;
    console.log(checkPassword);
    if (password != "" &&
      checkPassword != "" &&
      password === checkPassword) {
      console.log('senha iguais');
    } else {
      console.log('senhas diferentes');
    }
  }

  (function() {
    const random = (min, max) => Math.floor(Math.random() * (min + max) + min);
    log(random(1001, 9998));
  })();

  function log(msg) {
    const logElem = document.querySelector(".log");
    logElem.innerHTML += `${msg}<br>`;
  }
