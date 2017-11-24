/*  $(document).ready(function(){
        $(".nav-toggle").click(function(){
            $(".nav-menu").css("display", "block");
        });
    });*/

$(document).ready(function(){

	$(".nav-toggle").click(function(){

        if ($(".nav-menu").css("display")=="block") {
		$(".nav-menu").css("display", "none");
	}
	else {
		$(".nav-menu").css("display", "block");
	}

    });


});
