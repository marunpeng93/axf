angular.module("axf")
.controller("footCtrl",["$scope",function($scope){
	$scope.num=0;
	location.hash="#/home"
	//图片数组
	$scope.thatimg = ["images/footer-1.png","images/footer-2.png","images/footer-3.png","images/footer-4.png","images/footer-5.png"];
	$scope.thisimg = ["images/footer-12.png","images/footer-22.png","images/footer-32.png","images/footer-42.png","images/footer-52.png"]
	//点击改变图片
	$scope.imgclick = function(index){
		$scope.num = index;
	}
	//点击改变图片路径
	$scope.imgsrc = function(index){
		if(index==$scope.num){
			return $scope.thisimg[index]
		}else{
			return $scope.thatimg[index]
		}
	}
}])