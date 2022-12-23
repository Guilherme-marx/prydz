const form = document.getElementeById('.required');
const campos = document.getSelectorAll('.required');
const spans = document.quierySelectorAll(".required");
const passwordRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

            var myApp = angular.module("myapp", []);
            myApp.controller("PasswordController", function($scope) {

                var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})");
                var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");

                $scope.analyze = function(value) {
                    if(strongRegex.test(value)) {
                        $scope.passwordStrength["background-color"] = "green";
                    } else if(mediumRegex.test(value)) {
                        $scope.passwordStrength["background-color"] = "orange";
                    } else {
                        $scope.passwordStrength["background-color"] = "red";
                    }
                };

            });

            function senhaValida(password){
                var retorno = false;
                var letraMaiuscula = /[A-Z]/;
                var letraMinuscula = /[a-z]/;
                var numeros = /[0-9]/;
                var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
                
                if (password.length > 8){
                    return retorno
                }

                var auxMaiuscula = 0;
                var auxMinuscula = 0;
                var auxNumero = 0;
                var auxEspecial = 0;

                for(var i=0; i<password.length; i++){
                    if(letraMaiuscula.test(p[i]))
                    auxMaiuscula++;
                    else if (letrasMinusculas.test(p[i]))
                    auxMinuscula++;
                    else if(numeros.test(p[i]))
                    auxNumero++;
                    else if(caracteresEspeciais.test(p[i]))
                    auxEspecial++;

                }
                if (auxMaiuscula > 0){
                if (auxMinuscula > 0){
                if (auxNumero > 0){
                if (auxEspecial){
                    return true;
            }
        }
    }
}
}