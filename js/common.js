(function($){
	$().ready(function(){
		//login register
		$('.reg').on('click',function(){
	        layer.open({
	          type: 1,
	          title: false, 
	          content: $('#regBox'),
	          area:['850px', '650px'],
	          fix: true,
	          zIndex:9999,
	          offset : ['100px' , '']
	        });
	      })

	      var loginLayer=null;
	      $('.login').on('click',function(){
	        loginLayer=layer.open({
	          type: 1,
	          title: false, 
	          content: $('#loginBox'),
	          area:['850px', '600px'],
	          fix: true,
	          zIndex:9999,
	          offset : ['100px' , '']
	        });
	      })

	      $('.homeForm .forgetPsw a').on('click',function(){
	        layer.closeAll();
	        layer.open({
	          type: 1,
	          title: false, 
	          content: $('#findPswBox'),
	          area:['850px', '550px'],
	          fix: true,
	          zIndex:9999,
	          offset : ['100px' , '']
	        });
	      })

	      layer.config({
	        extend: [
	          'css/layer.css' 
	        ]
	      });


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
			var togPicVal=$('.productCon .leftPic li').eq(_thisIndex+1).find('jqimg').attr('src');

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
			$('.productCon .pic .bigTogglePic img').attr('jqimg',togPic);
			$('.productCon .pic .bigTogglePic img').stop(true,true).fadeIn('fast');
		}


		$('.productCon .leftPic ul li').on('click',function(){
			var _thisIndex=$(this).index();
			var togPicUrl=$(this).find('img').attr('src');
			var togPicUrl=$(this).find('jqimg').attr('src');

			$(this).parents('.leftPic').find('li').removeClass('active');
			$(this).addClass('active');

			if(_thisIndex>0){
				$(this).parents('.toggle').children('.rightInfo').find('.worksType').eq(_thisIndex-1).find('.tit').trigger('click');
			}
			
			(togPicUrl);
		})

		//newsCenter
		$('.helpCenter .helpCon li h2 .moreIcon').attr('showMore',true);
		$('.helpCenter .helpCon li h2 .moreIcon').on('click',function(){
			if(eval($(this).attr('showMore'))){
				$(this).parent('h2').siblings('p').css({
					'height':'26px',
					'overflow':'hidden'
				})
				$(this).css({
					'-webkit-transform':'rotate(0deg)',
					'-moz-transform':'rotate(0deg)',
					'transform':'rotate(0deg)'
				})
				$(this).attr('showMore',false);
			}else{
				$(this).parent('h2').siblings('p').css({
					'height':'auto'
				})
				$(this).css({
					'-webkit-transform':'rotate(180deg)',
					'-moz-transform':'rotate(180deg)',
					'transform':'rotate(180deg)'
				})
				$(this).attr('showMore',true);
			}
		})

		
		
	})
})(jQuery);