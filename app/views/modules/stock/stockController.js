medicalDemoApp.controller('stockController', ['$scope','$http','$location', function($scope,$http, $location) {
	console.log("stockController");
	$http({
		  method: 'GET',
		  headers: {
			   'Content-Type': 'application/json',
			 },
		  url: 'http://medicalbillingsystem.cfapps.io/listStock',//'data/summaryData.json'
		}).then(function successCallback(response) {
			  console.log("successCallback"+JSON.stringify(response.data));
		   console.log("successCallback");
		   $scope.StockData=response.data;
		  }, function errorCallback(response) {
			  console.log("errorCallback"+response);
			  alert("Unable to fetch data from server.")

		  });
}]);
