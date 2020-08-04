$(document).ready(function(){
	$(".why_hosi").click(function(){
		if($(".list_one").css("display") == 'none'){
			$(".list_one").show();	
		} else {
			$(".list_one").hide()
		}
	});

	$(".what_hobby").click(function(){
		if($(".list_two").css("display") == 'none'){
			$(".list_two").show();	
		} else {
			$(".list_two").hide()
		}
	});

	$(".what_interest").click(function(){
		if($(".list_three").css("display") == 'none'){
			$(".list_three").show();	
		} else {
			$(".list_three").hide()
		}
	});
});