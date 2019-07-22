$(document).ready(function() {
	// Question 1  Radio check----
	$('[name="radio1"]').change(function(){
		if($(this).val() == "5"){
			
			$('#modal-succes').css("display","flex");
			$('#submit').attr('disabled', false);
			$('#reset').attr('disabled', false);
		}else{
			$('#modal-error').css("display","flex");
			$('#submit').attr('disabled', false);
			$('#reset').attr('disabled', false);
		}
	});
	// Question 1 Radio End---

	// Question 2  Radio check----
	$('[name="radio2"]').change(function(){
		if($(this).val() == "2"){
			
			$('#modal-succes').css("display","flex");
			$('#submit').attr('disabled', false);
			$('#reset').attr('disabled', false);
		}else{
			$('#modal-error').css("display","flex");
			$('#submit').attr('disabled', false);
			$('#reset').attr('disabled', false);
		}
	});
	// Question 2 Radio End---

	// Question 3  Radio check----
	$('[name="radio3"]').change(function(){
		if($(this).val() == "8"){
			
			$('#modal-succes').css("display","flex");
			$('#submit').attr('disabled', false);
			$('#reset').attr('disabled', false);
		}else{
			$('#modal-error').css("display","flex");
			$('#submit').attr('disabled', false);
			$('#reset').attr('disabled', false);
		}
	});
	// Question 3 Radio End---

	// Question 4  Radio check----
	$('[name="radio4"]').change(function(){
		if($(this).val() == "6"){
			
			$('#modal-succes').css("display","flex");
			$('#submit').attr('disabled', false);
			$('#reset').attr('disabled', false);
		}else{
			$('#modal-error').css("display","flex");
			$('#submit').attr('disabled', false);
			$('#reset').attr('disabled', false);
		}
	});
	// Question 4 Radio End---

	// Submit check All Radio ----
	$('#submit').click(function(){
		// Check Radio 1
		if($('input[name = "radio1"]:checked').length == 0 ){
			$('#modal-submit').css("display","flex");
			return false;
		}else{
			$('#modal-submit').css("display","none");
		}

		// Check Radio 2
		if($('input[name = "radio2"]:checked').length == 0 ){
			$('#modal-submit').css("display","flex");
			return false;
		}else{
			$('#modal-submit').css("display","none");
		}

		// Check Radio 3
		if($('input[name = "radio3"]:checked').length == 0 ){
			$('#modal-submit').css("display","flex");
			return false;
		}else{
			$('#modal-submit').css("display","none");
		}

		// Check Radio 4
		if($('input[name = "radio4"]:checked').length == 0 ){
			$('#modal-submit').css("display","flex");
			return false;
		}else{
			$('#modal-submit').css("display","none");
		}
	});
	// Submit Check All Radio End---

	// Reset Unchecked All Radio Button
	$('#reset').click(function(){
		$('input[name="radio1"]').prop("checked", false);
		$('input[name="radio2"]').prop("checked", false);
		$('input[name="radio3"]').prop("checked", false);
		$('input[name="radio4"]').prop("checked", false);

	});
	// End Reset  Unchecked All Radio Button

	// close on closeIcon---
	$('.close').click(function(){
		$('#modal-succes').css("display","none");
		$('#modal-error').css("display","none");
		$('#modal-submit').css("display","none");

	});


// End Of Document Ready Function------
});
