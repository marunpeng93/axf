angular.module("axf")
.factory('cart',["$window",function($window){
	if(!$window.localStorage.cartbuy){
		$window.localStorage.cartbuy="[]";
	}
	var cartData = JSON.parse($window.localStorage.cartbuy);
	return {
		addProduct: function(shop){
			var boll = false;
			for(var i = 0;i < cartData.length;i++){
				if(cartData[i]["id"] == shop['id']){
					cartData[i].count++;
					boll = true;
					break;
				}
			}
			if(!boll){
				shop.count=1;
				cartData.push(shop)
			}
		},
		removeProduct:function(id){
			for (var i = 0; i < cartData.length; i++) {
				if(cartData[i]["id"] == id){
					cartData[i]["count"]--
					if(cartData[i]["count"]==0){
						cartData.splice(i,1);
					}
					break;
				}
			}
		},
		getCount:function(id){
			for (var i = 0; i < cartData.length; i++) {
				if(cartData[i]["id"] == id){
					return cartData[i]["count"]
					break;
				}
			}
		},
		getProduct:function(){
			$window.localStorage.cartbuy=JSON.stringify(cartData);
			return cartData;
		}
	}
}])