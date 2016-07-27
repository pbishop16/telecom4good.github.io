(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();   
    $('.carousel').carousel({
    	full_width: true,
    	indicators: true
    });

    setInterval(function(){
		  $('.carousel').carousel('next');
		}, 4500);

  }); // end of document ready
})(jQuery); // end of jQuery name space