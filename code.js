

function Encrypt($scope){
    $scope.phrase = "Default";
    $scope.pass = "Default";
    $scope.result = "";
    $scope.gibberish = function() {
        //alert("");
        $scope.result = "";
        for(var x = 0; x < $scope.phrase.length; x++) {
            var tempC = "";
            for(var y = 0; y < $scope.pass.length; y++) {
                var temp = (($scope.phrase.charCodeAt(x) + $scope.pass.charCodeAt(y)));
               if(temp > 255){temp-=255;}
               tempC = String.fromCharCode(Number(temp));
            }
            $scope.result+=tempC;
        }
        //console.log($scope);
        //console.log($scope.phrase.charCodeAt(0));
    } ;

}
