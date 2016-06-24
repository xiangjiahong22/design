//design
(function($){
	$().ready(function(){
		$('.designModule .typeChoose li').on('click',function(){
			var _index=$(this).index();
			$('.designModule .typeChoose li').removeClass('active');
			$(this).addClass('active');
		})

	  //design
	  var dragPicIndex=9;

      var wrapLeft=$('.uploadWrap').offset().left;
      var wrapTop=$('.uploadWrap').offset().top;

      $('.uploadWrap').on('mousedown','.dragCon',function(e){

        dragPicIndex++;


        var _this=$(this);
        var objL=e.pageX-$(this).position().left-wrapLeft;
        var objT=e.pageY-$(this).position().top-wrapTop;
        var rotateNum=$(this).attr('rotateval');


        _this.css({
          'z-index':dragPicIndex
        })

        var objPosLeft=$(this).position().left;
        var objPosTop=$(this).position().top;

        var objValLeft=$(this).css('left').replace('px','');
        var objValTop=$(this).css('top').replace('px','');

        var diffLeft=objValLeft-objPosLeft;  //算出旋转后的  left和position().left之间的差值   *****  图片旋转前后的left值   *****
        var diffTop=objValTop-objPosTop;

        $(document).on('mousemove',function(e){

         
         _this.css({
            'left':e.pageX-objL-wrapLeft+diffLeft,
            'top':e.pageY-objT-wrapTop+diffTop
          })

        })

        $(document).on('mouseup',function(e){
          $(document).off('mousedown');
          $(document).off('mousemove');
        })
        return false;
      })

      //scale
      var scaleMoveX=0;  //移动后X坐标
      var scaleMoveY=0;  //移动后Y坐标
      var originalX=0;  //原始X坐标
      var originalY=0;  //原始Y坐标
      var originalPicWidth=0;  //原始图片宽度
      var originalPicHeight=0;  //原始图片高度
      $('.uploadWrap').on('mousedown','.dragDot',function(e){
        originalX=e.pageX;
        originalY=e.pageY;
        var _this=$(this);

        if(_this.parent('.dragCon').attr('data-type')=='text'){  //区分文字和图片
          originalPicWidth=$(this).parent('.dragCon').width();  //原始文字宽度
          originalPicHeight=$(this).parent('.dragCon').height();  //原始文字高度
        }else{
          originalPicWidth=$(this).parent('.dragCon').find('.dragPic').width();  //原始图片宽度
          originalPicHeight=$(this).parent('.dragCon').find('.dragPic').height();  //原始图片高度
        }

        $(document).on('mousemove',function(e){
          scaleMoveX=e.pageX;
          scaleMoveY=e.pageY;

          dragScale(_this);
        })

        $(document).on('mouseup',function(e){
          $(document).off('mousedown');
          $(document).off('mousemove');
        })
        return false;
      })

      function dragScale(obj){
        var dataIndex=obj.attr('data-index');
        var dataType=obj.parent('.dragCon').attr('data-type');
        var fontSizeSet=0;

        if(dataIndex=='1'){  //左边的两个

          var diffValX=-(scaleMoveX-originalX);  //差值
          var diffValY=-(scaleMoveY-originalY);  //差值
          fontSizeSet=diffValX;

          obj.parents('.dragCon').css({
            'width':originalPicWidth+diffValX,
            'height':originalPicHeight+diffValY
          });
          
        }else if(dataIndex=='7'){  //左边的两个

	        var diffValX=-(scaleMoveX-originalX);  //差值
	        var diffValY=(scaleMoveY-originalY);  //差值
	        fontSizeSet=diffValX;

	        obj.parents('.dragCon').css({
	          'width':originalPicWidth+diffValX,
	          'height':originalPicHeight+diffValY
	        });
          
        }else if(dataIndex=='5'){  //右边的两个
         
            var diffValX=(scaleMoveX-originalX);
            var diffValY=(scaleMoveY-originalY);
            fontSizeSet=diffValX;

            obj.parents('.dragCon').css({
              'width':originalPicWidth+diffValX,
              'height':originalPicHeight+diffValY
            });

        }else if(dataIndex=='3'){
          var diffValX=(scaleMoveX-originalX);
          var diffValY=-(scaleMoveY-originalY);
          fontSizeSet=diffValX;

          obj.parents('.dragCon').css({
            'width':originalPicWidth+diffValX,
            'height':originalPicHeight+diffValY
          });

        }else if(dataIndex=='2'){  //上
          var diffVal=-(scaleMoveY-originalY);
          fontSizeSet=diffVal;

          obj.parents('.dragCon').css({
            'width':originalPicWidth+diffVal,
            'height':originalPicHeight+diffVal
          });
         
        }else if(dataIndex=='6'){  //下
          var diffVal=(scaleMoveY-originalY);
          fontSizeSet=diffVal;

          obj.parents('.dragCon').css({
            'width':originalPicWidth+diffVal,
            'height':originalPicHeight+diffVal
          });
         
        }else if(dataIndex=='8'){
          var diffVal=-(scaleMoveX-originalX);  //差值
          fontSizeSet=diffVal;

          obj.parents('.dragCon').css({
            'width':originalPicWidth+diffVal,
            'height':originalPicHeight+diffVal
          });
        }
        else if(dataIndex=='4'){
          var diffVal=(scaleMoveX-originalX);
          fontSizeSet=diffVal;

          obj.parents('.dragCon').css({
            'width':originalPicWidth+diffVal,
            'height':originalPicHeight+diffVal
          });
        }

       
        obj.parents('.dragCon').find('img').css({
          'width':'100%',
          'height':'100%',
          'max-width':'2000px',
          'max-height':'2000px'
        });

        obj.parents('.dragCon').find('.text').css({
          'font-size':originalPicWidth+fontSizeSet+'%'
        });

      }

      var line1=0;
      var line2=0;
      var angleDiff=0;
      var angleDiffVal=0;
      var angle=0;

      var math = {};
      math.slope = function(p1, p2)  //atan函数 求斜率
      {
        var angle = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]); 
        return angle;
      };

      function getAngle(centerX,centerY,px1, py1, px2, py2){

      }

      //rotate
      var originalRotateNum=0;
      var newLeft=0;
      var newTop=0;
      $('.uploadWrap').on('mousedown','.rotateBtn',function(e){
        var originalAngelX=e.pageX;  
        var originalAngelY=e.pageY;
        var _this=$(this);

        var objWidth=$(this).parent('.dragCon').width();  //对象的宽高
        var objHeight=$(this).parent('.dragCon').height();

        var objLeft=$(this).parent('.dragCon').css('left').replace('px','');  //对象的位置
        var objTop=$(this).parent('.dragCon').css('top').replace('px','');  

        var centerX=eval(objLeft)+(objWidth/2)+wrapLeft;   //中心点
        var centerY=eval(objTop)+(objHeight/2)+wrapTop;

        $(document).on('mousemove',function(e){
          var currentAngelX=e.pageX;
          var currentAngelY=e.pageY;

          angle = math.slope([centerX,centerY], [currentAngelX,currentAngelY]);   //移动过程中斜率
          angle = angle/Math.PI*180+50;

          _this.parent('.dragCon').css({
             '-webkit-transform':'rotate('+angle+'deg)',
             '-moz-transform':'rotate('+angle+'deg)'
          })

          _this.parent('.dragCon').attr('rotateval',angle);

        })

        $(document).on('mouseup',function(e){
          $(document).off('mousedown');
          $(document).off('mousemove');
        })

        return false;

      })

    //del
    $('.design').on('click','.delBtn',function(){ 
      $(this).parent('.dragCon').remove();
    })

	//text
  var attribute='';
  var textObj='';
  var familyVal='';
  var sizeVal='';
	$('.design .text select').on('change',function(){
		attribute=$(this).attr('class');
		textObj=$('.design .textZone').val();
		

		if(textObj!=''){  //文字输入不为空的情况下
			if(attribute=='fontFamily'){  //字体样式设置
        familyVal=$(this).val();
				$('.design .textZone').css('font-family',familyVal);

			}else if(attribute=='fontSize'){  //字体大小设置
        sizeVal=$(this).val();
				$('.design .textZone').css('font-size',sizeVal);
			}
		}
	})

	//color
	$('.design .fontColor .color').on('click',function(){
		$('.design .text .colorPanel').toggle();
	})

	$('.design .colorPanel .del').on('click',function(){
		$('.design .text .colorPanel').hide();
	})

	$('.design .colorPanel .sub').on('click',function(){

		var chooseColor=$('.design .colorPanel li.active a').css('background-color');
		$('.design .textZone').css('color',chooseColor);
		$('.design .fontColor .color').css('background',chooseColor)

		$('.design .text .colorPanel').hide();
	})

	$('.design .colorPanel').on('click','li',function(){
		$('.design .colorPanel li').removeClass('active');
		$(this).addClass('active');
	})

	$('.design .text .textSubBtn').on('click',function(){
		var textVal=$('.design .textZone').val();
    var textColor=$('.design .fontColor .color').css('background-color');

		if($('.design .textZone').val()!=''){
			var li=$('#dargText').find('li').clone();
			li.find('.text').text(textVal);
      li.css({
        'font-family':familyVal,
        'font-size':sizeVal,
        'color':textColor

      });
			$('#uploadWrap').append(li.prop("outerHTML")); 
       $('.design .textZone').val('');
		}

	})

  function dragStyleHide(){
    $('.design .dragDot').hide();
    $('.design .dragCon').css('border','1px solid transparent');
    $('.design .rotateBtn').hide();
    $('.design .modifyBtn').hide();
  }

  function dragStyleShow(obj){
    obj.css('border','1px solid #ffc641');
    $('.dragDot',obj).show();
    $('.rotateBtn',obj).show();
    $('.modifyBtn',obj).show();
  }

  //dragdot
  $('document,body').on('click',dragStyleHide);

  $('.design').on('click','.dragCon',function(e){
    var _this=$(this);

    dragStyleHide();
    dragStyleShow(_this);

    e.stopPropagation();
  });

  $('.design .sample li').on('click',function(e){
    e.stopPropagation();
  });



  
		
	})
})(jQuery);



      

     
