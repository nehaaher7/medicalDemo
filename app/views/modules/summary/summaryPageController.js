medicalDemoApp.controller('summaryController', ['$scope','$http','$location', function($scope,$http, $location) {
	console.log("summaryController");
	$http({
		  method: 'GET',
		  headers: {
			   'Content-Type': 'application/json',
			 },
		  url: 'http://medicalbillingsystem.cfapps.io/salesMade',//'data/summaryData.json'
		}).then(function successCallback(response) {
			  console.log("successCallback"+JSON.stringify(response.data));
		   console.log("successCallback");
		   $scope.summaryData=response.data;
		  }, function errorCallback(response) {
			  console.log("errorCallback"+response);
			  alert("Unable to fetch data from server.")
		   
		  });
	/*
  $scope.summaryData = [{
		  medicineCode: 'Naomi',
		  quantity: 12,
		  patientName: 'Naomi',
		  price: 20.00,
		  
  },{
	  medicineCode: 'Naomi',
	  quantity: 11,
	  patientName: 'Naomi',
	  price: 16.00,
	  
},{
	  medicineCode: 'Naomi',
	  quantity: 22,
	  patientName: 'Naomi',
	  price: 10.10,
	  
}];*/
}])
.directive('purchaseSummary', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/summary/summaryHeader.html'
  };
}).directive('purchaseSummaryRecord', function() {
	  return {
		    restrict: 'E',
		    templateUrl: 'views/summary/summaryRecord.html'
		  };
		});