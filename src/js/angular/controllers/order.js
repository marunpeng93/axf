angular.module("axf")
.controller("orderCtrl",["cart","$scope","$http","axfsurl",function(cart,$scope,$http,axfsurl){
	//分类数组
	var sortData1 = ["精选水果",'直供蔬菜',"水产海鲜",'肉禽蛋',"乳品烘焙","熟食面点","粮油副食","酒水饮料","休闲零食","整箱购"];
	//添加分类
	$scope.sortData1=sortData1;
	//判断点击的那个分类
	$scope.num = 0;
	//初始分类
	$scope.title = sortData1[$scope.num];
	//分类点击函数
	$scope.sortclick = function(index){
		$scope.num=index;
		$scope.title = sortData1[$scope.num];
		$scope.ordermarketdata=$scope["ordermarketdata"+$scope.num];
	}
	//分类点击变色函数
	$scope.bordercolor = function(data){
		return data==$scope.num?"borderblock":"";
	}
	//获取数据
	$http.get(axfsurl+"hot").then((data)=>{
		$scope.ordermarketdata0 = data.data.data
		$scope.ordermarketdata=$scope.ordermarketdata0
	})
	$http.get(axfsurl+"sale").then((data)=>{
		$scope.ordermarketdata1 = data.data.data
	})
	$http.get(axfsurl+"seckill").then((data)=>{
		$scope.ordermarketdata2 = data.data.product
	})
	$http.get(axfsurl+"bread").then((data)=>{
		$scope.ordermarketdata3 = data.data.data
	})
	//添加商品
	$scope.addcart = function(shop){
			cart.addProduct(shop)
	}
	//删除商品
	$scope.removecart = function(shop){
		cart.removeProduct(shop.id)
	}
	//商品数量
	$scope.counts = function(id){
		return cart.getCount(id)
	}
}])
