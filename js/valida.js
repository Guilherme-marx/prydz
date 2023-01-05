function validarEmail(nome3, nome4) {
  var email1 = document.getElementById(nome3).value;
  var email2 = document.getElementById(nome4).value;
  console.log(email2);
  if (email1 != "" &&
    email2 != "" &&
    email1 === email2) {
    alert('verifique seu email');
  } else {
    alert('o email não corresponde. Por favor, verifique se digitou corretamente o email');
  }
}
$(document).ready(function () {
  $('input').keypress(function (e) {
    var code = null;
    code = (e.keyCode ? e.keyCode : e.which);
    return (code == 13) ? false : true;
  });
});










// $(document).ready(function () {
//   $('form').submit(function (e) {
//     e.preventDefault();
//     window.history.back();
//   });
// });

// function Init () {
//   var myTextbox = document.getElementById('my-textbox');
//   myTextbox.addEventListener( 'keypress', checkName, false );
// }

// function validarEmail(evt) {
//   var charCode = evt.charCode;
//   if (charCode != 0) {
//       if (charCode < 97 || charCode > 122) {
//           evt.preventDefault();
//       }
//   }
// }













