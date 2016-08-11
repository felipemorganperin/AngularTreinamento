angular.module("myApp",[])
.controller("control", function($scope){

$scope.exibirNome = exibirNmPrivado;

function exibirNmPrivado(nome){
    $scope.titulo = "Olá " + nome + " !"
}


    $scope.clicou = function (){
        $scope.titulo = "Clicou no botao"
    }
});