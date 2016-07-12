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
	                hash: false,
	                parentEleName:''
	            };
	            var options = $.extend(defaults, options);
	            
				$('a',this).on('click',function(){
					 var toggleWrap=$(this).parents('.'+options.parentEleName).siblings('.toggleCon');

					var $index=$(this).index();
					$(this).addClass('active').siblings().removeClass('active');

					$('>.toggle',toggleWrap).addClass('hide');
					$('>.toggle',toggleWrap).eq($index).removeClass('hide');

					if(options.hash){
						window.location.hash='#'+($index+1);
					}
					
				})
			},
			nunDecOrInc:function(options){
				$('.cartReduce',this).on('click',function(){
					var numVal=$(this).siblings('.cartInp').val();
					if(numVal>1){
						numVal--;
						$(this).siblings('.cartInp').val(numVal);
					}
				})

				$('.cartIncrease',this).on('click',function(){
					var numVal=$(this).siblings('.cartInp').val();
					numVal++;
					$(this).siblings('.cartInp').val(numVal);
				})

			}

		})
	})
})(jQuery);
