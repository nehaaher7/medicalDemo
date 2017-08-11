
medicalDemoApp.controller('orderController', ['$scope','$http','$location','$rootScope','orderService','myService','medicineDetailsService',
  function($scope,$http, $location,$rootScope,orderService,myService,medicineDetailsService) {
  $scope.disableflag=true;

  $scope.checkMandatoryFields= function(orderQty){

    if($scope.orderQty==null||$scope.orderQty==undefined ||$scope.medicineID==null ||$scope.medicineID==undefined)
    {
      $scope.disableflag=true;
    }else {
      $scope.disableflag=false;
    }
  },

  $scope.goToMedicineDetails= function(){

    if( $scope.disableflag==false){
			$rootScope.patientNameVal=$scope.patientName;
			$rootScope.orderQtyVal=$scope.orderQty;
			var orderDataVal=new Object();
			orderDataVal['patientName']=$scope.patientName;
			orderDataVal['refDocName']=$scope.refDocName;
			orderDataVal['orderQty']=$scope.orderQty;
			orderDataVal['medicineID']=$scope.medicineID;
			myService.set(orderDataVal);

			var medicalObjArr=[];
			var medicalDetailsObj=new Object();
			medicalDetailsObj['medicineCode']=$scope.medicineID;
			medicalDetailsObj['medicineDescription']=null;
			medicalDetailsObj['price']=null;
			medicalDetailsObj['manufacturer']=null;
			medicalDetailsObj['vendor']=null;
			medicalDetailsObj['stockCount']=null;
			medicalObjArr.push(medicalDetailsObj);
			orderService.getOrderData(medicalObjArr).then(function(res){
				//$location.path('/bill');
				$scope.medicineDetails=res;
			medicineDetailsService.set(res);
      console.log("contacts",  	$scope.medicineDetails)
			 $location.path('/bill');
		});
	}},

	$scope.getData= function(){
		$location.path('/summary');
};

}]);


medicalDemoApp.factory('myService', function() {
	 var savedData = {}
	 function set(data) {
	   savedData = data;
	 }
	 function get() {
	  return savedData;
	 }

	 return {
	  set: set,
	  get: get
	 }

	});


medicalDemoApp.factory('medicineDetailsService', function() {
	 var savedData = {};
	 function set(data) {
	   savedData = data;
	   console.log("setsetset",savedData)
	 }
	 function get() {
	  return savedData;
	 }

	 return {
	  set: set,
	  get: get
	 }

	});

