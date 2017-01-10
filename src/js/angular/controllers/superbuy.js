angular.module("axf")
.controller("superbuyCtrl",["$scope","$http","axfsurl","cart","$interval",function($scope,$http,axfsurl,cart,$interval){
	//获取数据
	$http.get(axfsurl+"seckill").then((data)=>{
		$scope.seckilData = data.data.product
	})
	//判断是否可以抢购
	$scope.addcart = function(shop){
		if(shop.btnText !== "即将开抢"&&shop.btnText !=="已抢光"){
			cart.addProduct(shop)
		}	
	}
	//判断是否可以抢购改变样式
	$scope.supercolor = function(shop){
		return shop.btnText == "即将开抢"?"supercolorccc":"supercolorred"
	}
	//倒计时
	$interval(function(){
		$scope.supertime=function(){
			var time = new Date();
			var minutes= 60- time.getMinutes();
			var second = 60 - time.getSeconds();
			if(minutes<10){
				minutes="0"+minutes;
			}
			if(second<10){
				second="0"+second
			}
			return "00:"+minutes+':'+second
		}
	},1000)
}])