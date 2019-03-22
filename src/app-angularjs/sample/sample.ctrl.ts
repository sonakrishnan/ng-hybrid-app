import { angularJSModule } from "../app.module";

angularJSModule.controller('sampleController', function($scope) {
    $scope.student = {
       firstName: "Sona",
       lastName: "Krishnan",
       
       fullName: function() {
          var studentObject;
          studentObject = $scope.student;
          return studentObject.firstName + " " + studentObject.lastName;
       }
    };
 });

