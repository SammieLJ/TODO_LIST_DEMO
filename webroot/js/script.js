// Code goes here

var myApp = angular.module('myApp', ['ui.bootstrap.modal', 'angularUtils.directives.dirPagination'] );

/*myApp.controller('MyController', ['$scope', '$http', function ($scope, $http) {
$http.get('http://localhost:8080/TODO_LIST_TEST/tasks.json?page='+$scope.currentPage+'&limit='+$scope.pageSize)
  .success(function(response) {
    $scope.tasks = response.tasks; })
  .error(function(data, status, headers, config) {
      Alert('Napaka pri prenosu!');
  });
}]);*/

function MyController($scope, $http) {

  $scope.currentPage = 1;
  $scope.pageSize = 10;
  $scope.tasks = [];
  $scope.taskId = 0;
  //$scope.tasks =  '{ "tasks": [' +
  //'  { "Id": 1, "TaskDesc": "Prvi vnost opravila!", "Completed": true, "Deleted": false, "EntryTime": "2017-01-12T18:15:34+00:00" } ]}';

  $scope.NewTaskOwner = ''
  $scope.NewTaskDesc = ''
  $scope.NewTaskCompleted = 0;
  $scope.formDataObj = '';

  $scope.editTaskOwner = '';
  $scope.editTaskDesc = '';
  $scope.editTaskCompleted = '';
  $scope.EditDataObj = '';

  /* http://localhost:8080 */
  //$scope.loadData = function() {
  function loadData() { 
    $http.get('/TODO_LIST_TEST/tasks.json?limit=100&sort=Id')
    .success(function(response) {
      $scope.tasks = response.tasks; })
    .error(function(data, status, headers, config) {
        Alert('Napaka pri prenosu!');
    });

  };

  function deleteTaksOnServerData(Id) {
    //$http.delete('/TODO_LIST_TEST/tasks/delete/'+Id)
    $http.delete('/TODO_LIST_TEST/tasks/'+Id+'.json')
    .error(function(data, status, headers, config) {
        Alert('Napaka pri prenosu!');
    });

  };

  //after defining loadData lets call that function - Samir
  //$scope.loadData();
  loadData();

  $scope.pageChangeHandler = function(num) {
      console.log('tasks page changed to ' + num);
  };

  $scope.editRow = function (task) {
    console.log('Proženje editRow eventa');
    $scope.selectedTask = task;
    $scope.$broadcast('Edit');
  };

  $scope.removeRow = function (task) {

    // first step - remove task in tasks locally on web page, faster response for user, this step is quite unnecessary - Samir
    $scope.taskId = task.Id;
    poz = $scope.tasks.indexOf(task);
    $scope.tasks.splice(poz, 1);

    console.log('We will delete Task With Id: ' + $scope.taskId);

    // second step - call delete json/api to delete taks on server
    deleteTaksOnServerData($scope.taskId);

    // third step - let repopulate tasks with loadData() - Samir (maybe we will need to delete local Tasks list beforehand)
    //$scope.tasks = [];
    //loadData();

    // preveri, če je tablea Taskov polna ($scope.tasks)
    if($scope.tasks && $scope.tasks.length){   
     console.log('Tabela ($scope.tasks) NI PRAZNA!');
    } else {
      console.log('Tabela ($scope.tasks) JE PRAZNA!');
    }
  };

  $scope.addNewTask=function(){
      //$scope.tasks.push({title :$scope.task1,description: $scope.description1});
      //$scope.tasks.push({title : $scope.task1, description : $scope.description1});
      //$scope.task1='';
      //$scope.description1='';
     //   $scope.tasks.push('dhsh');
  };

  $scope.$on('Repopulate', function(event) {  
      console.log('Ujet signal za Repopulate');
      $scope.tasks = [];
      loadData();

      //še boljše je poklicat EDIT in samo dodaš Task, bo bolj Asyc zgledalo, kot da filam vse še enkrat
  });

  //$scope.editTask=function(selectedTask) {

  //};

  //angular.element('#myBtn').trigger('click');
}


function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);

// -------------------------------------------------- //
// -------------------------------------------------- //
// I control the root of the application.
myApp.controller('MyCtrl', function($scope, $http) {

  $scope.open = function() {
    $scope.showModal = true;
  };

  $scope.updateTasks = function() {
    console.log('Izvedemo manuelni Update Tasks');
    $scope.$emit('Repopulate');
  };

  $scope.ok = function() {
   console.log('OK funkcija je prožena pri Modal Form');

   //var d = new Date();
   //var n = d.toLocaleString();
   var datetime = new Date();
   var day = datetime.getDate();
   var month = datetime.getMonth() + 1; //month: 0-11
   var year = datetime.getFullYear();
   var hours = datetime.getHours();
   var minutes = datetime.getMinutes();
   
   // Completed returns true, we need 1
   var taskCompleted = $scope.NewTaskCompleted ? 1 : 0;

   $scope.formDataObj = 'TaskDesc='+$scope.NewTaskDesc+'&Completed='+taskCompleted+'&TaskOwner='+$scope.NewTaskOwner+'&EntryTime[year]='+year+'&EntryTime[month]='+month+'&EntryTime[day]='+day+'&EntryTime[hour]='+hours+'&EntryTime[minute]='+minutes;

   console.log('Inside $scope.formDataObj .. '+$scope.formDataObj);

    // send using POST to server
    //,headers: {'Content-Type': 'application/x-www-form-urlencoded'}  
    $http({
      method: 'POST',
      url: '/TODO_LIST_TEST/tasks/add',
      data: $scope.formDataObj,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}  
    }).then(function(response) {
      // success
      console.log('Poslano - Add new Task!');
    }, 
    function(response) { // optional
      // failed
      console.log('Ni poslano - Add new Task!');
    });

    // I can add task to existing JS Task array or repopulate with loadData() - easier
    
    //console.log('Praznimo staro tabelo Taskov in polnimo z dopolnjeno');
    //$scope.$emit('Repopulate');
    //$scope.tasks = [];
    //$scope.loadData();

    // and lastly turn off Modal Form
    $scope.showModal = false;
  };

  $scope.cancel = function() {
    $scope.showModal = false;
  };

});

// -------------------------------------------------- //
// -------------------------------------------------- //
// I control the root of the application.
myApp.controller('EditCtrl', function($scope, $http) {

  //$scope.editTaskDesc = $scope.selectedTask.TaskDesc;
  //$scope.editTaskCompleted = $scope.selectedTask.Completed;


  $scope.$on('Edit', function(event) {  
      console.log('Ujet signal za Edit');
      $scope.showEditModal = true;

  });

  $scope.okEdit = function() {
    console.log('OK funkcija je prožena pri Edit Modal Form');

   // Set Date object
   /*var datetime = new Date();
   var day = datetime.getDate();
   var month = datetime.getMonth() + 1; //month: 0-11
   var year = datetime.getFullYear();
   var hours = datetime.getHours();
   var minutes = datetime.getMinutes();*/
   
   // Completed returns true, we need 1
   var taskCompleted = $scope.editTaskCompleted ? 1 : 0;

   //$scope.EditDataObj = 'TaskDesc='+$scope.editTaskDesc+'&Completed='+taskCompleted+'&EntryTime[year]='+year+'&EntryTime[month]='+month+'&EntryTime[day]='+day+'&EntryTime[hour]='+hours+'&EntryTime[minute]='+minutes;
   $scope.EditDataObj = 'TaskDesc='+$scope.editTaskDesc+'&Completed='+taskCompleted+'&TaskOwner='+$scope.editTaskOwner;

   console.log('Inside $scope.EditDataObj .. '+$scope.EditDataObj);

    $http({
      method: 'POST',
      url: '/TODO_LIST_TEST/tasks/edit/'+$scope.selectedTask.Id,
      data: $scope.EditDataObj,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}  
    }).then(function(response) {
      // success
      console.log('Poslano - Edit new Task!');
    }, 
    function(response) { // optional
      // failed
      console.log('Ni poslano - Edit new Task!');
    });


    $scope.showEditModal = false;
  };

  $scope.cancelEdit = function() {
    $scope.showEditModal = false;
  };

});