angular.module('LobbyCtrl', []).controller('LobbyController', function($scope, $log) {
	$scope.tagline = 'LOBBY!';
  $scope.nickName = "Guest" + Math.floor(Math.random()*100);
  $scope.messageLog = 'Ready to chat!';
  $scope.sendMessage = function(){
    console.log('foobar');
    $scope.message = '';
    console.log($scope.nickName);
  };

});