angular.module("axf")
.controller("superCtrl",["$scope","$http","axfsurl","cart",function($scope,$http,axfsurl,cart){
	//获取数据
	$http.get(axfsurl+"hot").then((data)=>{
		$scope.supermarketdata0 = data.data.data
		$scope.supermarketdata=$scope.supermarketdata0
	})
	$http.get(axfsurl+"sale").then((data)=>{
		$scope.supermarketdata1 = data.data.data
	})
	$http.get(axfsurl+"seckill").then((data)=>{
		$scope.supermarketdata2 = data.data.product
	})
	$http.get(axfsurl+"bread").then((data)=>{
		$scope.supermarketdata3 = data.data.data
	})
	//判断点击的那个分类
	$scope.num = 0;
	//分类数组
	var sortData = ["热销榜",'天天特价',"优选水果",'牛奶面包',"卤味熟食","饮料酒水","休闲零食","方便速食","粮油调味","生活用品"]
	//添加分类
	$scope.sortData=sortData;
	//分类点击函数
	$scope.dataclick = function(data){
		$scope.num = data;
		$scope.supermarketdata=$scope["supermarketdata"+$scope.num]
	}
	//分类点击样式改变函数
	$scope.border = function(index){
		return index==$scope.num?"borderleft":''
	}
	// 添加商品
	$scope.addcart = function(shop){
			cart.addProduct(shop)
	}
	// 删除商品
	$scope.removecart = function(shop){
		cart.removeProduct(shop.id)
	}
	// 商品数量
	$scope.counts = function(id){
		return cart.getCount(id)
	}
}])