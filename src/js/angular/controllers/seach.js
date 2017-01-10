angular.module("axf")
.controller("searchCtrl",["$scope","$http","axfsurl","cart","$window",function($scope,$http,axfsurl,cart,$window){
	//获取数据
	$http.get(axfsurl+"hot").then((data)=>{
		$scope.fruitData=data.data.data.slice(0,3)
	})
	//搜索框
	$scope.data = "";
	//判断是否有本地存储
	if(!$window.localStorage.search){
		$window.localStorage.search="[]";
	}
	//是否已经搜索
	$scope.bol = true;
	//获取本地存储
	$scope.searchdata = JSON.parse($window.localStorage.search);
	//搜索
	$scope.dataclick = function(){
		if($scope.data!=""){
			$scope.searchdata.push($scope.data)
			$window.localStorage.search=JSON.stringify($scope.searchdata);
			$scope.bol = false;
			$scope.data1=$scope.data;
			$scope.data=""
		}
	};
	//清空历史记录
	$scope.removedata = function(){
		$scope.searchdata=[];
		$window.localStorage.search="[]";
	}
}])