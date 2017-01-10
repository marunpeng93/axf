angular.module("axf")
.controller("shopcarCtrl",["$scope","cart",function($scope,cart){
	//获取购物车数据
	$scope.shopdata = cart.getProduct();
	//添加商品
	$scope.addcart = function(shop){
			cart.addProduct(shop)
	}
	//删除商品
	$scope.removecart = function(shop){
		cart.removeProduct(shop.id)
	}
	//商品结算
	$scope.buydata = cart.getProduct().slice(0)
	//是否添加结算
	$scope.buy = function(data){
		if($scope.buydata.indexOf(data)==-1){
			$scope.buydata.push(data)
		}else{
			$scope.buydata.splice($scope.buydata.indexOf(data),1)
		}
	}
	//选中结算变色
	$scope.buycolor = function(data){
		return $scope.buydata.indexOf(data)==-1?"":"yellow";
	}
	//结算
	$scope.total = function(){
		var total = 0;
		for(var i = 0;i <$scope.buydata.length;i++){
				total+=($scope.buydata[i].price*$scope.buydata[i].count)
		}
		total = parseInt(total*10)/10
		return total;
	}
	//结算按钮变色
	$scope.buycolortotal = function(){
		return $scope.buydata.length > 0?"yellow":"";
	}
	//全选按钮变色
	$scope.quanxuan = function(){
		return $scope.buydata.length==$scope.shopdata.length?"yellow":"";
	}
	//全选按钮
	$scope.quanxuanbuy = function(){
		if($scope.buydata.length==$scope.shopdata.length){
			$scope.buydata=[]
		}else{
			$scope.buydata=$scope.shopdata.slice(0)
		}
	}
	//商品数量
	$scope.counts = function(id){
		return cart.getCount(id)
	}
}])