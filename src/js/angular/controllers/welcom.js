angular.module("axf")
.controller("welcomCtrl",["$timeout",function($timeout){
	$timeout(function(){
		location.hash="#/home"
	},3000)
}])