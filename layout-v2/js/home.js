// JavaScript Document

(function($){
	
    $(document).ready(function() {		
		$('#carousel ul').empty();
		$('#slides').cycle({
			fx: 'uncover',
			speed: 1000,
			timeout: 10000,
			containerResize: 0,
			cleartype: true,
			cleartypeNoBg: true,
			pager: '#carousel ul',
			pagerAnchorBuilder: function(idx, slide) {
					   return '<li><a href="#"></a></li>';
			}
		}); 
    });
})(jQuery);