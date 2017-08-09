medicalDemoApp.controller('billController', ['$scope','$http','$location','$rootScope','myService','medicineDetailsService', function($scope,$http, $location,$rootScope,myService,medicineDetailsService) {

	  var MedicalDescData=medicineDetailsService.get();
    $scope.medicinDetails=MedicalDescData;

    $scope.billCheckout=function(){
		  var billObjArr=[];
			var billObj=new Object();
			billObj['medicineCode']= $scope.billmedicineCode;//$rootscope.medicineCode;
			billObj['medicineDescription']= MedicalDescData[0].medicineDescription;//MedicalDescData.medicineDescription;//null;
			billObj['quantity']= $scope.billorderQty;
			billObj['patientName']= $scope.billpatientName;
			billObj['refDoctorName']= $scope.billrefDocName;
			billObj['price']=   $scope.billTotal;
			billObjArr.push(billObj);
      $http({
			  method: 'PUT',
			  url: 'http://medicalbillingsystem.cfapps.io/generateBill',//'data/medicineDetails.json',
			  data:  billObjArr,
			}).then(function successCallback(response) {
				 // console.log("successCallback"+JSON.stringify(response.data));
			   console.log("successCallback");
			   alert("Bill details submitted Sucessfully.");
				$location.path('/');
			  // $scope.medicinDetails=response.data;
			  }, function errorCallback(response) {
				  console.log("errorCallback"+response);
				  alert("Unable to fetch data from server.")

			  });
	  }

  $scope.submitbillDetails= function() {
    },

	$scope.getTotal = function(){
	    var total = 0;
      for(var i = 0; i < $scope.medicinDetails.length; i++){
	        var product = $scope.medicinDetails[i];
	        total += (product.price)*product.stockCount;//(product.stockCount);
	        $scope.billTotal=total;
	    }
	    return total;
	}

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
