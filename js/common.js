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
			var togPicJqVal=$('.productCon .leftPic li').eq(_thisIndex+1).find('img').attr('jqimg');

			themeWorkTogLeft(togPicVal);

			$(this).parents('.toggle').children('.leftPic').find('li').removeClass('active');
			$(this).parents('.toggle').children('.leftPic').find('li').eq(_thisIndex+1).addClass('active');

		});

		$('.productCon .leftPic ul li').on('click',function(){
			var objThis=$(this);
			var _thisIndex=$(this).index();
			var togPicUrl=$(this).find('img').attr('src');
			var togPicJqVal=$('.productCon .leftPic li').eq(_thisIndex+1).find('img').attr('jqimg');

			$(this).parents('.leftPic').find('li').removeClass('active');
			$(this).addClass('active');

			if(_thisIndex>0){
				$(this).parents('.toggle').children('.rightInfo').find('.worksType').eq(_thisIndex-1).find('.tit').trigger('click');
			}

			if(_thisIndex>0){
				themeWorkTogLeft(togPicUrl,objThis);
			}
			
		})

		function themeWorkTogLeft(togPic,obj){
			$('.productCon .pic .bigTogglePic img').stop(true,true).fadeOut('fast');
			$(obj).parents('.toggle').find('.bigTogglePic').children('img').attr('src',togPic);
			$(obj).parents('.toggle').find('.bigTogglePic').children('img').attr('jqimg',togPic);
			$('.productCon .pic .bigTogglePic img').stop(true,true).fadeIn('fast');
			console.log('a');
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


		

		//newsCenter
		$('.helpCenter .helpCon li h2 .moreIcon').attr('showMore',true);
		$('.helpCenter .helpCon li h2 .moreIcon').on('click',function(){
			var _index=$(this).parents('li').index();
			if(eval($(this).attr('showMore'))){
				$(this).parent('h2').siblings('p').css({
					'height':'auto',
					'overflow':'hidden'
				})
				$(this).css({
					'-webkit-transform':'rotate(0deg)',
					'-moz-transform':'rotate(0deg)',
					'transform':'rotate(0deg)'
				})
				$(this).attr('showMore',false);
				/*$(this).parents('h2').css('color','#7a7a7a');*/
				
				
			}else{
				$(this).parent('h2').siblings('p').css({
					'height':'26px'
				})
				$(this).css({
					'-webkit-transform':'rotate(180deg)',
					'-moz-transform':'rotate(180deg)',
					'transform':'rotate(180deg)'
				})
				$(this).attr('showMore',true);
			}
			$(this).parents('h2').css('color','#7a7a7a');
			$(this).attr('clicked'+_index,true);
			//利用localstorage设置点击后变色  类似a标签的visited
			localStorage.setItem('clicked'+(_index),$(this).attr('clicked'+_index));
		})


		//works 评分特效
		$('.voteScore li').on('click',function(){
			$(this).addClass('checked');
		})

		
		
	})
})(jQuery);