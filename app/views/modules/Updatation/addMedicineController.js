medicalDemoApp.controller('addMedicineController', ['$scope','$http','$location', function($scope,$http, $location) {

	$scope.InsertRecord=function(medicineInsertData){
	//	console.log("addMedicineController"+medicineInsertData);
		console.log("InsertRecord"+medicineInsertData);
		var addmedicalObj=new Object;
		addmedicalObj["medicineCode"]=""+$scope.MedicineCode;
		addmedicalObj["medicineDescription"]=""+$scope.MedicineDecs;
		addmedicalObj["price"]=""+$scope.Price;
		addmedicalObj["manufacturer"]=""+$scope.Manufacturer;
		addmedicalObj["vendor"]=""+$scope.Vendor;
		addmedicalObj["stockCount"]=""+$scope.StockCount;
		
		console.log("======"+JSON.stringify(addmedicalObj));
		
		var addStock='http://medicalbillingsystem.cfapps.io/addStock';
		var updateStock='http://medicalbillingsystem.cfapps.io/updateStock';
		var delStock='http://medicalbillingsystem.cfapps.io/deleteStock';
		
		console.log("$location.href===="+$location.path());
		var currPage=$location.path();
		var UrlFinal;
		var methodFinal;
		if(currPage=="/delete")
			{
			UrlFinal=delStock;
			methodFinal="PUT";
			}else if(currPage=="/add"){
			UrlFinal=addStock;
			methodFinal="POST";
			}else{
			UrlFinal=updateStock;
			methodFinal="PUT";
			}
		
	$http({
		  method: methodFinal,//'PUT',
		  headers: {
			   'Content-Type': 'application/json',
			 },
	
		  url: UrlFinal,//'data/summaryData.json',
		  data:addmedicalObj,		  
		}).then(function successCallback(response) {
			  console.log("successCallback"+JSON.stringify(response.data));
		   console.log("successCallback");
		   alert("Records Updated sucessfully.")
		  }, function errorCallback(response) {
			  console.log("errorCallback"+response);
			  alert("Unable to Connect To server.")
		
		  });
	}
}]);