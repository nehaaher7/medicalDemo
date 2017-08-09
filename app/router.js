
medicalDemoApp.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '../../views/modules/home/homePage.html',
      controller: 'homeController'
    }).
    when('/edit', {
      templateUrl: '../../views/modules/Updatation/editPage.html',
      controller: 'addMedicineController'
    }).
    when('/summary', {
      templateUrl: '../../views/modules/summary/summaryPage.html',
      controller: 'summaryController'
    }).
    when('/order', {
      templateUrl: '../../views/modules/Order/orderPage.html',
      controller: 'orderController'
    }).
    when('/bill', {
      templateUrl: '../../views/modules/bill/bill.html',
      controller: 'billController'
    }).
    when('/add', {
      templateUrl: '../../views/modules/Updatation/AddMedicine.html',
      controller: 'addMedicineController'
    }).
    when('/update', {
      templateUrl: '../../views/modules/Updatation/AddMedicine.html',
      controller: 'addMedicineController'
    }).
    when('/delete', {
      templateUrl: '../../views/modules/Updatation/delMedicine.html',
      controller: 'delMedicineController'
    }).
    when('/stock', {
      templateUrl: '../../views/modules/stock/stock.html',
      controller: 'stockController'
    }).
    otherwise({
      redirectTo: '/'
    });
  });
