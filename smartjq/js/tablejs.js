$(function(){
			// 1.控制多行文本框滚动条
			var  $texa=$('#mscroll');
			$('.upd').click(function(){
				  //文本框没有动画的时候滚动条向上移动
				  if(!$texa.is(':animated')){
				  	$texa.animate({'scrollTop':'-=50'},400); 
				  }
			})
		   $('.dod').click(function(){
		   	      //文本框没有动画的时候滚动条向下移动
				  if(!$texa.is(':animated')){
				  	$texa.animate({'scrollTop':'+=50'},400); 
				  }
			})
		   // 2.全选，全部选，反选，提交
			   //2.1全选
			   $('.btn1').click(function(){
			   	 $('[name=aih]:checkbox').prop('checked',true)
			   })
			   //2.2全不选
			   $('.btn2').click(function(){
			   	 $('[name=aih]:checkbox').prop('checked',false)
			   })
			   //2.3反选
			   $('.btn3').click(function(){
				   	 $('[name=aih]:checkbox').each(function(){
				   	 	// 这里下面两种写法都可以，重点是认真!工作中加上样式变化
				   	 	// $(this).prop('checked',!$(this).prop('checked'));
				   	 	this.checked=!this.checked;
				   	 })
			   })
			   //2.4提交
			   $('.btn4').click(function(){
			   	  //先清空预防机制,再塞入选项框的val()值；
			   	 var arrs=null;
			   	 var arrs=[];
			   	 $('[name=aih]:checked').each(function(){
                       if($(this).prop('checked')){
                       	   arrs.push($(this).val());
                       }
			   	 })
			   	 console.log(arrs);
			   })
			 // 3.选项框转移
			   // 3.1选中的转移
			 $('.pr').click(function(){
			 	var $op1=$('#se_1 option:selected');
			 	// $rem=$op1.remove();
			 	$op1.appendTo('#se_2');//appendTo删除和转移一个人搞定!上一句可省略
			 })
			    // 3.2全部转移
			 $('.pr1').click(function(){
			 	var $op2=$('#se_1 option');
			 	$op2.appendTo('#se_2');
			 })
			   //双击select下拉框转移
			 $('#se_1').dblclick(function(){
			 	var $op1=$('#se_1 option:selected');
			 	$op1.appendTo('#se_2');
			 })
			 //4兼容考虑双色表单
			 // $('.bsq tr:even').addClass('even');
			 // $('.bsq tr:odd').addClass('odd');
			 //5filter新过滤
			 $('p').filter(":contains('sws')").css('background','red');
			 // $('p').filter(":contains('"+bl+"')").css('background','red');跟变量也行
			 // $('p').filter(".lksa").css('background','red');
			 // 6.load方法
			
})