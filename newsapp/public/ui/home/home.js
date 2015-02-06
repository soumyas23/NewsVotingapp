angular.module('ui').controller('HomeCtrl',function($scope,$firebase){
$scope.showadd=true;

$scope.add=function(){
  $scope.news={};
$scope.item=true;	
$scope.showadd=false;
};
var ref = new window.Firebase("https://crackling-inferno-1357.firebaseio.com/news");  
var fb = $firebase(ref);
var syncObject = fb.$asObject();

  // three way data binding
 
  
$scope.save=function(news){
  var title=news.item;
  var description=news.description;
  var vote=0;
fb.$push({
       
       item:title,
       description:description,
		    vote:vote
     });
$scope.item=false;  
$scope.showadd=true;
};
 syncObject.$bindTo($scope,'newsadded');
$scope.cancel=function(){

	$scope.item=false;	
	$scope.showadd=true;
	$scope.news={};


};
$scope.like=function(newses){
 newses.vote++;
};

$scope.dislike=function(newses){
 newses.vote--;
};




});