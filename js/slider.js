$(function(){
	
	var banner_i = 0;
	var banner_l = $(".banner_num li").length;
	
	$(".banner_img li:gt(0)").hide();
	$(".banner_num div a:gt(0)").hide();
	
	$(".banner_num li").mouseover(function(){
		banner_i = $(this).index();
		$(this).addClass("cur").siblings("li").removeClass("cur");		
		$(".banner_img li").eq(banner_i).fadeTo(600,1).siblings("li").hide();
		$(".banner_num div a").eq(banner_i).show().siblings("a").hide();
	});	
	
	function autoChange(){
		if(banner_i < banner_l-1){
			banner_i++;
		}else{
			banner_i=0;
		}		
		$(".banner_num li").eq(banner_i).mouseover();
	}
	
	setInterval(autoChange,6000);
	
});// JavaScript Document