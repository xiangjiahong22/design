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

		//buyentrance4-toggle

		$('.rightInfo').each(function(){
			$('.worksType:gt(0) .sizeInfo',this).addClass('hide');
		})

		$('.rightInfo .worksType .tit').on('click',function(){
			$(this).parents('.rightInfo').find('.sizeInfo').stop(true,true).slideUp();
			$(this).siblings('.sizeInfo').stop(true,true).slideDown();

			$('.rightInfo .worksType .icon').css({
				'-webkit-transform':'rotate(0deg)',
        		'-moz-transform':'rotate(0deg)'
			})
			$(this).find('.icon').css({
				'-webkit-transform':'rotate(180deg)',
        		'-moz-transform':'rotate(180deg)'
			})

			var _thisIndex=$(this).parents('.worksType').index();
			var togPicVal=$('.productCon .leftPic li').eq(_thisIndex+1).find('img').attr('src');

			themeWorkTogLeft(togPicVal);

			$(this).parents('.toggle').children('.leftPic').find('li').removeClass('active');
			$(this).parents('.toggle').children('.leftPic').find('li').eq(_thisIndex+1).addClass('active');

		});

		function themeWorkTogLeft(togPic){
			$('.productCon .pic .bigTogglePic img').stop(true,true).fadeOut('fast');
			$('.productCon .pic .bigTogglePic img').attr('src',togPic);
			$('.productCon .pic .bigTogglePic img').stop(true,true).fadeIn('fast');

		}

		$('.worksType .size a').on('click',function(){
			$(this).parent('.size').find('a').removeClass('active');
			$(this).addClass('active');
			var sizeVal=$(this).text();
			$(this).parent('.size').children('.sizeInp').val(sizeVal);
		})

		$('.priNum .num .dec').on('click',function(){
			var numVal=$(this).siblings('.inp').val()
			if(numVal>1){
				numVal--;
			}
			$(this).siblings('.inp').val(numVal);
			$(this).parents('.priNum').find('.numInp').val(numVal);
		});

		$('.priNum .num .add').on('click',function(){
			var numVal=$(this).siblings('.inp').val()
			numVal++;
			$(this).siblings('.inp').val(numVal);
			$(this).parents('.priNum').find('.numInp').val(numVal);
		});

		$('.priNum .num .inp').on('keyup',function(){
			var numVal=$(this).val();

			if(numVal<=0){
				numVal=1;
				$(this).val('1');
			}

			$(this).parents('.priNum').find('.numInp').val(numVal);
		})

		function themeWorkTogRight(togPic){
			$('.productCon .pic .bigTogglePic img').stop(true,true).fadeOut('fast');
			$('.productCon .pic .bigTogglePic img').attr('src',togPic);
			$('.productCon .pic .bigTogglePic img').stop(true,true).fadeIn('fast');
		}


		$('.productCon .leftPic ul li').on('click',function(){
			var _thisIndex=$(this).index();
			var togPicUrl=$(this).find('img').attr('src');

			$(this).parents('.leftPic').find('li').removeClass('active');
			$(this).addClass('active');

			if(_thisIndex>0){
				$(this).parents('.toggle').children('.rightInfo').find('.worksType').eq(_thisIndex-1).find('.tit').trigger('click');
			}
			
			themeWorkTogRight(togPicUrl);
		})

		
		
	})
})(jQuery);