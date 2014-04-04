// JavaScript Document

(function($){
	
    $(document).ready(function() {		
		$(document).pngFix();
		
		if($('.content-sidebar .content-sidebar-repeat').height() > $('.content-main .content-main-repeat').height())
		{
			$('.content-main .content-main-repeat').height($('.content-sidebar .content-sidebar-repeat').height());
		}
		else if($('.content-sidebar .content-sidebar-repeat').height() < $('.content-main .content-main-repeat').height())
		{
			$('.content-sidebar .content-sidebar-repeat').height($('.content-main .content-main-repeat').height());
		}
		$('a.fancy').fancybox();
    });
})(jQuery);