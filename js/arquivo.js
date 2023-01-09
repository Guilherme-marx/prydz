(function () {
  const random = (min, max) => Math.floor(Math.random() * (min + max) + min);
  alert(random(1001, 9998));
})();

function log(msg) {
  const logElem = document.querySelector(".log");
  logElem.innerHTML += `${msg}<br>`;
}


function validarSenha(nome1, nome2) {
  const password = document.getElementById(nome1).value;
  const checkPassword = document.getElementById(nome2).value;
  const cmp = password === checkPassword
  if (cmp) {
    alert('true')
    window.location.href('/html/redefinirSenhaPage.html')
  } else {
    ('false')
    event.preventDefault();
  }
}
