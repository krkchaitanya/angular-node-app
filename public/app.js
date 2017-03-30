var myApp=angular.module("myApp",["ngRoute"]);

myApp.controller("mainController",["$scope","$log","$http","firstService",function($scope,$log,$http,firstService){
    
//    $http({
//        method:"GET",
//        url:"databasee.json"
//    }).then(function sucessCallback(response){
//        $scope.people=response;
//    },function errorCallback(response){
//        console.log(response);
//    });
        $scope.handle="";
        $scope.characters=5;
    $scope.name=firstService.name;
    
    $scope.$watch("name",function(){
       
        firstService.name=$scope.name;
    });
    
    
    
    $http.get("databasee.json").then(function(response){
    $scope.people=response.data;
        
    });
    
    $scope.alertClick=function(){
        alert("clicked");
    };
    
    
}]);    
    


myApp.controller("secondController",["$scope","$log","firstService",function($scope,$log,firstService){
    
    $scope.name=firstService.name;
    
      $scope.$watch("name",function(){
       
        firstService.name=$scope.name;
    });
    
    $log.log(firstService.name);
    $log.log(firstService.namelength());
}]);

myApp.config(function($routeProvider){
    
   $routeProvider
   
   .when("/main",{
       templateUrl:'pages/main.html',
       controller:'mainController'
       
   })
   
   .when('/second',{
       templateUrl:'pages/second.html',
       controller:'secondController'
   })
    
});  
    

myApp.service("firstService",function(){
   
var self=this;
    this.name="john";
    this.namelength=function(){
        return self.name.length
    };
    
});


myApp.directive("searchResult",function(){
   return{
       template:'<a href="#" class="list-group-item list-group-item-action flex-column align-items-start active"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">List group item heading</h5><small>3 days ago</small></div><p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p><small>Donec id elit non mi porta.</small></a>'
   } 
    
});
    
    
    
    

    

