angular.module('ui' ).controller('HomeCtrl',function($scope,$firebase,$filter){
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
  // for(var i=0;i<)

  $scope.item=false;  
$scope.showadd=true;
};
 syncObject.$bindTo($scope,'newsadded');
$scope.cancel=function(){

	$scope.item=false;	
	$scope.showadd=true;
	$scope.news={};


};
 //$scope.syncObject = $filter('orderBy')($scope.syncObject,'vote' );
  console.log($scope.syncObject);
$scope.like=function(newses,newsadded){
 newses.vote++;
 var newsData=[];
  var k = 0 ;
 for(var key in newsadded){
    newsData[k]  = newsadded[key];
         k++;                                
    }
console.log(newsData);
for(var i = 2 ;i<newsData.length;i++){
  for(var j = 2;j<newsData.length - 1;j++){
   if(newsData[j].vote < newsData[j+1].vote){
    var t = newsData[j];
    newsData[j] = newsData[j+1];
    newsData[j+1] = t;
     }
  }
 }
    i = 0 ;
   console.log(newsData);
   for(var keys in newsadded){
        newsadded[keys]  = newsData[i];
         i++;                                
    }
    console.log(newsadded);
    console.log(newsData);


};

$scope.dislike=function(newses,newsadded){
       newses.vote--;
      var newsData=[];
      var k = 0 ;
      for(var key in newsadded){
         newsData[k]  = newsadded[key];
         k++;                                
       }
        console.log(newsData);
  for(var i = 2 ;i<newsData.length;i++){
    for(var j = 2;j<newsData.length - 1;j++){
      if(newsData[j].vote < newsData[j+1].vote){
       var t = newsData[j];
        newsData[j] = newsData[j+1];
       newsData[j+1] = t;
     }
  }
 }
    i = 0 ;
   console.log(newsData);
   for(var keys in newsadded){
        newsadded[keys]  = newsData[i];
         i++;                                
    }
    console.log(newsadded);
    console.log(newsData);

};





});