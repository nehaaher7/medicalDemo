
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
      });

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

describe('Services: orderService ', function () {

    var scope, httpBackend;

    beforeEach(function () {

        //load the module.
       module('medicalDemoApp')

        //inject your service for testing.
        inject(function ($httpBackend, $injector, $rootScope,$controller) {
            orderService = $injector.get('orderService');
            httpBackend = $httpBackend;
            scope = $rootScope.$new();
            
        });

    });

    //check our expectations were missed in tests.
    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should return msg and verify expexctations', function () {
        
        var returnData = [{"medicineCode":"2","medicineDescription":"Naomi","price":"22","manufacturer":"Himalayas","vendor":"Himalayas","stockCount":"2"}];
        
        httpBackend.whenGET('/order').respond(returnData);
        
        var abc=[{"medicineCode":"3","medicineDescription":null,"price":null,"manufacturer":null,"vendor":null,"stockCount":null}];
        //promise object
        var returnedPromise = orderService.getOrderData(abc);
        
        //we handle with promise object
        returnedPromise.then(function(data){
          expect(data).to.be.a('array');
          expect(data[0]).to.include({"medicineCode":"2"});
         });
        
        //flush for http request
        httpBackend.flush();

    });

 });
  });