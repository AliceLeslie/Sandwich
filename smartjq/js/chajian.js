    $(document).ready(function () {
    	//用validator接住返回对象
      var Validator=$("#fohh").validate({
         	//debug:true校验完成后不进行提交
         	// debug:true,
            rules: {
                xm: {
                    required: true,
                    // 必填
                    minlength: 2,
                    maxlength: 10,
                    // rangelength:[2,10],
                    // 远程校验
                    // remote:{
                    //     url:"remote.json",
                    //     type:"post",
                    //     date:{
                    //         loginTime:function(){
                    //             return+new Date;
                    //         }
                    //     }
                    // },
                    // postcode:"true"
                },
                mm: {
                    required: true,
                    minlength: 2,
                    maxlength: 16
                },
                "enmm": {
                    required:{
                        depends:function(element){
                            return $("#mm").is(":filled");
                            // 意思就是密码项已填写时此验证才生效
                        }
                    },
                    equalTo: "#mm"
                    // id加了横杠所以加""
                },
                youxiang:{
                    required:true,
                    email:true,
                },
                nl:{
                     required:true,
                     number:true,
                      range:[18,100]
                },
                sex:{
                    required:true,
                },
                ri:{
                    required:true,
                    dateISO:true
                    // 格式：2011-12-30 2011/11/11
                },
                tz:{
                    required:true,
                    range:[30,70]
                },
                sg:{
                	required:true,
                	range:[150,199]
                },
                cgwz:{
                	required:true,
                	url:true
                },
                riqik:{
                	 required:true,
                	 data:true
                }


            },
            messages: {
                xm: {
                    required: '用户名必须写',
                    minlength: '用户名不能小于2个字符',
                    maxlength: '用户名不能超过10个字符',
                    // remote: '用户名可使用',
                    // rangelength:'请输入2-10位字符'
                },
                mm: {
                    required: '密码必须写',
                    minlength: '密码不能小于2个字符',
                    maxlength: '密码不能超过16个字符'
                },
                "enmm": {
                    required:'为什么不填',
                    equalTo: "两次输入密码不一致"
                },
                nl:{
                    range:'未满18岁的少年请滚粗'
                },
                youxiang:{
                    required:'八路来了要填',
                    error:'错误的请举手'

                }

            },

            highlight: function(element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).fadeOut().fadeIn();
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
            },
            //验证通过后,在这里写提交函数
            submitHandler: function (form) {
                // $.ajax({
                //     .....
                // })
                console.log($(form).serialize())
              // 验证每一项成功时触发
            },
            success:function(label){
                label.addClass("riss")
            },
            // groups:{
            //     login:"username password confirm-password"
            // },
            // errorPlacement:function(error,element){
            //     error.insertBefore("#info")
                  // 将错误信息依次显示在上方
                  // group与errorplacemnt要结合使用
            // },
            invalidHandler:function(event,validator){
                console.log("错误数:"+validator.numberOfInvalids());
            },
            errorClass:"wrong",
            validClass:"right",
            // errorLabelContainer:"#info",
            // errorElement:"li",
            // wrapper:"ul"
            // 这3行等于卸载顶部容器中
            errorContainer:"#info2"
            // 此句必须跟上3句搭配起来一起使用
      });
       // 第一个函数到此结束
        //增加组和验证类型
        $.validator.addClassRules({
            txt:{
                required:true,
                minlength:5
            }
            // txt为需要添加验证规则的class名，好想没生效
        })
        //不需要捕获对象直接增加自定义的验证方法
        $.validator.addMethod("postcode",function(value,element,params){
            var postcode=/^[0-9]{6}$/;
            return this.optional(element)||(postcode.test(value));
            // 前半句是值为空的时候不触发校验
        },"请填写正确的邮编！");

         //检查表单是否正确，绕过submit,可以用ajax提交了
        $("#check").click(function () {
            alert($("#fohh").valid() ? "填写正确" : "填写不正确");
           console.log($('#fohh').valid())
           // if($('#fohh').valid()){
           // 	Validator.resetForm();
           // }
        });
        //动态加载错误信息
        // Validator.showErrors({
        // 	xm:'你填错了，哈哈',
        // 	mm:'密码也错了'
        // })
        	
        
        // valid检查表单某些是否有效
    });