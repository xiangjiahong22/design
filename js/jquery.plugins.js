//common plugins
(function($){
	$().ready(function(){
		$.fn.extend({
			//toggle hide
			//## .toggleCon ##
			//## .toggle - .hide ##

			//##<div class="designCenter toggleCon">
			//##	<div class="toggle"></div>
			//##	<div class="toggle hide"></div>
			//##	<div class="toggle hide"></div>
			//##</div>
			toggleHide:function(options){
				var defaults = {
	                hash: false
	            };
	            var options = $.extend(defaults, options);

				var toggleWrap=$(this).siblings('.toggleCon');
				$('a',this).on('click',function(){

					var $index=$(this).index();
					$(this).addClass('active').siblings().removeClass('active');

					$('.toggle',toggleWrap).addClass('hide');
					$('.toggle',toggleWrap).eq($index).removeClass('hide');

					if(options.hash){
						window.location.hash='#'+($index+1);
					}
					
				})
			},

		});
	})
})(jQuery);
