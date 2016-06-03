(function($){
	$().ready(function(){
		//bestList
		$('.bestList li').hover(function(){
			$('a',this).append('<div class="hoverInfoBox">'+
	            '<div class="con">'+
	              '<p class="name"><span>T-SHIRT</span></p>'+
	              '<P class="workName">Magnetic Big Kid</P>'+
	              '<p class="price">￥32.00</p>'+
	            '</div>'+
	          '</div>');
		},function(){
			$('.hoverInfoBox',this).remove();
		})

		//pastTheme
		$('.pastTheme li:not(:last)').hover(function(){
			$('a',this).append('<div class="hoverInfoBox">'+
	            '<div class="con">'+
	              '<p class="check">查看获奖者</p>'+
	            '</div>'+
	          '</div>');
		},function(){
			$('.hoverInfoBox',this).remove();
		})

		
	})
})(jQuery);