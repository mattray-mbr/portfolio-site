app.controller('mainController', ['$scope', '$http', function($scope, $http){
    $scope.test = "hello"

    $scope.load = function(){
        $http.get('/api/load').then(function(returnData){
            $scope.test = returnData.data
        })
    }

    $scope.sendEmail = function(){
        var email = {
            name    : $scope.name,
            email   : $scope.email, 
            message : $scope.message, 
        }
        console.log(email)
        $http.post('/api/sendEmail', email).then(function(returnData){
            $scope.returnMessage = returnData.data
        })
    }

}])