

function Encrypt($scope){
    $scope.phrase = "Default";
    $scope.pass = "Default";
    $scope.result = "";
    $scope.gibberish = new function() {
        $scope.result = "";
        for(var x = 0; x < phrase.length; x++) {
            var tempC;
            for(var y = 0; y < pass.length; y++) {
                var temp = (($scope.phrase[x].charCode + $scope.pass[y].charCode));
                if(temp > 255){temp-=255;}
                tempC = String(temp);
            }
            $scope.result+=tempC;
        }

    } ;
}
