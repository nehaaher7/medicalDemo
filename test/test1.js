
describe('createMochaReporterConstructor', function () {
  it('should take reporter from client config on debug page', function () {
    expect("abx").to.equal("abx");
  });
});

describe('MyController', function(){
  beforeEach(module('medicalDemoApp'));

  describe('check flag is set to false when order quantity AND medicine id provided', function(){
    it('disableflag should be false when values order quantity and medicine code provided ', inject(function($rootScope,$controller){
      var scope = {};
      var myController = $controller('orderController',{$scope: scope});
      scope.orderQty=2;
      scope.medicineID=3;
      scope.checkMandatoryFields ();
      expect(scope.disableflag).to.equal(false);
    }));

    describe('check flag is set to false when order quantity AND medicine code are null', function(){
    it('disableflag should be true when values order quantity and medicine code are null ', inject(function($rootScope,$controller){
      var scope = {};
      var myController = $controller('orderController',{$scope: scope});
      scope.orderQty=null;
      scope.medicineID=null;
      scope.checkMandatoryFields();
      expect(scope.disableflag).to.equal(true);
    }));
    });

//  describe('medicineDetailsService exists', function(){
//  it('medicineDetailsService exists', inject(function(medicineDetailsService) {
//  expect(medicineDetailsService).to.exist;
// }));
//  });

    describe('goToMedicineDetails', function(){
      it('should be added to scope', inject(function($controller, $httpBackend,medicineDetailsService){
        var scope = {};
        $httpBackend
          .when('PUT', '/order')
          .respond([
            {"medicineCode":"2","medicineDescription":"Naomi","price":"22","manufacturer":"Himalayas","vendor":"Himalayas","stockCount":"2"}
          ]);
        var myController = $controller('orderController', {
          $scope: scope
        });

        var abc=[
          {"medicineCode":"2","medicineDescription":"Naomi","price":"22","manufacturer":"Himalayas","vendor":"Himalayas","stockCount":"2"}
        ];
       // $httpBackend.flush();
        expect(scope.medicinDetails).to.equal(abc);
      }));
    });

  });
});

/*
describe('orderController', function() {
  beforeEach(module('medicalDemoApp'));
//  var $controller;

 /!* beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));*!/

  it('sets the strength to "strong" if the password length is >8 chars', inject(function($controller) {
      var scope = {};
      var myController = $controller('orderController', {
        $scope: scope
      });

      $scope.orderQty="2";
      $scope.medicineID="2";
      scope.checkMandatoryFields();
      //var controller = $controller('orderController', { $scope: $scope });
      //$scope.checkMandatoryFields();
      expect(scope.disableflag).toEqual(false);

});

});*/