
medicalDemoApp.service('orderService', function($http,$location,$rootScope,medicineDetailsService) {
	this.getOrderData = function(medicalDetailsObj) {
		console.log("medicalDetailsObj===",JSON.stringify(medicalDetailsObj))
		 var responceData;
		return $http({
			  method: 'GET',//'PUT',
			  url: '/order',//'http://medicalbillingsystem.cfapps.io/getMedicineData',//'data/medicineDetails.json',
			  headers: {
				   'Content-Type': 'application/json',
				 },
				 data:medicalDetailsObj,
			  //params: {medicineID:medicineID,}
			}).then(function successCallback(response) {		
					responceData= response.data;
					return responceData;
			  }, function errorCallback(response) {
				  alert("Unable to fetch data from server.");
			  });
		}
	
});
