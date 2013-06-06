
   encryptApp = angular.module('encryptApp',[])
       .controller('encryptController',function($scope){
           $scope.data = {phrase: 'Default', mod: 'Default'};
           $scope.settings = {maxKeySpace: 122, minKeySpace: 21, offset: 0};

           $scope.data.modify = function() {
             var result = "";
               for(var x = 0; x < $scope.data.phrase.length; x++) {
                   var tempC = "";
                   for(var y = 0; y < $scope.data.mod.length; y++) {
                       var temp = (($scope.data.phrase.charCodeAt(x) + $scope.data.mod.charCodeAt(y)));
                       if(temp < $scope.settings.minKeySpace){temp+=$scope.settings.minKeySpace;}
                       if(temp > $scope.settings.maxKeySpace){temp-=$scope.settings.maxKeySpace;}
                       tempC = String.fromCharCode(Number(temp));
                   }
                   result+=tempC;
               }
               return result;
           };
       });