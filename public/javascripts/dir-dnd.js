
myapp.directive('add', function($parse) {
 
    return function(scope, element, attrs) {
 
       
        var counter =12;
        var gocats1 = false;


        scope.showDiv = function(gocats1){

            return gocats1;
        }



       scope.addTask1 = function(){

        scope.todoModel.push({value:scope.data1,id:++counter});
            scope.data1 ="";
             
       }

       scope.addTask2 = function(){

        scope.doingModel.push({value:scope.data2,id:++counter});
            scope.data2 ="";
                
       }

       scope.addTask3 = function(){

        scope.doneModel.push({value:scope.data3, id:++counter});
            scope.data3 ="";
          }


        
        
    }
});
