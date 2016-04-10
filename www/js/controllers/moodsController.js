app.controller('moodsController', function($scope, $ionicActionSheet, datastore) {
  $scope.moods = [
    {mood: 'Happy', time: 1},
    {mood:'Sad', time: 2},
    {mood:'Angry', time: 3},
    {mood:'Angry', time: 4},
    {mood:'Angry', time: 5},
    {mood:'Angry', time: 6},
    {mood:'Angry', time: 7},
    {mood:'Angry', time: 8},
    {mood:'Angry', time: 9},
    {mood:'Angry', time: 10},
    {mood:'Angry', time: 11},
    {mood:'Angry', time: 12}];
  $scope.options = {
    showDelete: false,
    canSwipe: true
  };
  $scope.addMood = function(){
    $scope.moods.push({mood: 'Test', time: 4});
  };
  $scope.editMood = function(mood){
    mood.time += 1;
  };
  $scope.moodHoldActions = function(mood) {
	  $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       { text: 'Move' }
     ],
     destructiveText: 'Delete',
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
		 console.log(index);
       return true;
     }
   });
  };
});
