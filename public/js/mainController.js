app.controller('mainController', ['$scope', '$http', function($scope, $http){
    $scope.test = "hello"

    // setInterval(function(){
    //     console.log('rotate')
    //     $scope.rotateFront = !$scope.rotateFront;
    //     $scope.rotateBack = !$scope.rotateBack;
    // }, 8000);


    $scope.sendEmail = function(){
        var email = {
            name    : $scope.name || 'none',
            email   : $scope.email || 'none', 
            message : $scope.message || 'none', 
        }
        console.log(email)
        $http.post('/api/sendEmail', email).then(function(returnData){
            if(returnData.data !== 'err'){
                $scope.name = '';
                $scope.email = '';
                $scope.message = '';
                $scope.returnMessage = returnData.data;
            } else {
                $scope.returnMessage = "Opps, something went wrong. Please try again later";
            }
        })
    }

}])