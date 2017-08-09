medicalDemoApp.controller('delMedicineController', ['$scope','$http','$location', function($scope,$http, $location) {

	$scope.deleteRecord=function(medicinedelData){
	
		
	$http({
		  method: 'PUT',
		  headers: {
			   'Content-Type': 'application/json',
			 },
	
		  url: 'http://medicalbillingsystem.cfapps.io/deleteStock',//'data/summaryData.json',
		  data:medicinedelData,		  
		}).then(function successCallback(response) {
			  console.log("successCallback"+JSON.stringify(response.data));
		   console.log("successCallback");
		   alert("Records deleted sucessfully.")
		  }, function errorCallback(response) {
			  console.log("errorCallback"+response);
			  alert("Unable to Connect To server.")
		
		  });
	}
}]);