angular.module("axf")
.controller("homeCtrl",["$scope","$http","axfsurl","cart","$timeout",function($scope,$http,axfsurl,cart,$timeout){
	//轮播图片
	$scope.lunboimgData = ["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg"]
	//获取数据
	$http.get(axfsurl+"swiper").then((data) => {
		//$scope.lunboimgData=data["data"]["data"]["slide"];
		$scope.menuData=data.data.slide;
	},(error) => {
		$scope.error = error.data;
	})
	$http.get(axfsurl+"hot").then((data)=>{
		$scope.hotdata=data.data.data.slice(0,3)
	})
	$http.get(axfsurl+"reserve").then((data)=>{
		$scope.reservedatas = data.data.product
	})
	//添加购物车
	$scope.addcart = function(shop){
			cart.addProduct(shop)
	}
	//购物车减
	$scope.removecart = function(shop){
		cart.removeProduct(shop.id)
	}
	//商品数量
	$scope.counts = function(id){
		return cart.getCount(id)
	}
	//轮播
	$timeout(function(){
		$scope.swiper = new Swiper('.swiper-first', {
		       pagination: '.swiper-pagination',
			    paginationClickable: true,
		        spaceBetween: 30,
		        centeredSlides: true,
		        autoplay: 2500,
		        autoplayDisableOnInteraction: false,
		        loop:true
		});
		$scope.swiper1 = new Swiper('.swiper-second', {
		       direction: 'vertical',
		       slidesPerView: 1,
		       paginationClickable: true,
		       spaceBetween: 30,
		       autoplay: 2500,
		       autoplayDisableOnInteraction: false,
		       loop:true
		});
	},30)
}])