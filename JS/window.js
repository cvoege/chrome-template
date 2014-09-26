$(document).ready(function(){
  $(".text-input-container .text-input").keypress(function(e){
  	if(e.keyCode == 13 && $(this).val().length > 0){
    	$('.output').html($('.output').html() + $(this).val() +  "<br>");
  		$(this).val('');
  	}
  });
});