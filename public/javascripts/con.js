

var myapp = angular.module('sortableApp', ['ui.sortable']);


myapp.controller('sortableController', function ($scope, $filter) {
  var tmpList = [];
  
  $scope.todoModel = [
        {
             "id": 1,
            "value": "Card1"
        },
        {
             "id": 2,
            "value": "Card2"
        },
        {
            "id": 3,
            "value": "Card3"
        },
        {
             "id": 4,
            "value": "Card4"
        }
    ];
 
    $scope.doingModel = [
        {
            "id": 6,
            "value": "Card_2 "
        },
        {
            "id": 7,
            "value": "Card_3"
        },
        {
            "id": 8,
            "value": "Card_4"
        },
        {
            "id": 5,
            "value": "Card_1"
        }
    ];

    $scope.doneModel = [
        {
            "id": 9,
            "value": "Card/1"
        },
        {
            "id": 10,
            "value": "Card/2 "
        },
        {
            "id": 11,
            "value": "Card/3"
        },
        {
            "id": 12,
            "value": "Card/4"
        }
    ];


  
  $scope.sortingLog = [];
  
  $scope.sortableOptions = { 
    placeholder: "app-ph",
    connectWith: ".apps-container"
   
  };


  
  
 
});
