
medicalDemoApp.controller('homeController', ['$scope','$http','$location', function($scope,$http, $location) {
	console.log("homeContoller===========>");
	$scope.getOrder= function(){
		console.log("getOrder===========>");
		$location.path('/order');
	},
	$scope.getEdit= function(){
		console.log("getEdit===========>");
		$location.path('/edit');
	},
	$scope.getData= function(){
		$location.path('/summary');
		console.log("getData===========>");


};

}]);
