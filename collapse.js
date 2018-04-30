$(document).ready(()=>{
		    var content = $('.collapse-container > p');
  			$('.collapse-container >.head > h3').click(function() {
		    content.slideUp();
		    $(this).parent().next().slideDown();
		    return false;
		  });
		});