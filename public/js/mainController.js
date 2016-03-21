app.controller('mainController', ['$scope', '$http', function($scope, $http){
    $scope.test = "hello"

    $scope.load = function(){
        $http.get('/api/load').then(function(returnData){
            $scope.test = returnData.data
        })
    }

}])