(function() {
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function isString(str) {
  var regex = /^\s+$/;
  if (str && !regex.test(str)) {
    /* remove leading spaces */
    var str1 = str.replace (/(^\s)/, '');
    /* remove leading and trainling quotes */
    var str2 = str1.replace (/(^\")|(\"$)/g, '');
    if (!regex.test(str2)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function countElements(arr) {
    var elemCount = 0;
    arr.forEach(function (element) {
      if (isString(element)) {
        elemCount++;
      }
    });
    return elemCount;
}

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var itemCount;
  $scope.Check = function () {
    if (!isString($scope.menu)) {
      $scope.message = "Please enter data first";
      return;
    }
    itemCount = countElements($scope.menu.split(","));
    if (itemCount == 0) {
      $scope.message = "Please enter data first";
    } else if (itemCount <= 3) {
      $scope.message = "Enjoy!"
    } else {
      $scope.message = "Too much!"
    }
    return "ok"
  }
}
}());
