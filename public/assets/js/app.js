$(document).ready(function(){
	$('#submit-burger').on('click', function(e){
		e.preventDefault();
		var burgerInput = $('#burger_name');
		
		if(burgerInput.val().trim() == ''){
			burgerInput.after('<p class="text-danger">Please enter a burger name</p>');
			burgerInput.focus();
		} else {
			$('#form-burger').submit();
		}
	})
})