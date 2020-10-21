'use strict'
$(function(){
    $('#reg').click(function(){
        $('.first').css({
            display:'none'
        })
        $('.second').css({
            display:'block'
        })
        $('.login').css({
            display:'none'
        })
        $('.register').css({
            display:'block'
        })
    })

    $('#login').click(function(){
        $('.first').css({
            display:'block'
        })
        $('.second').css({
            display:'none'
        })
        $('.login').css({
            display:'block'
        })
        $('.register').css({
            display:'none'
        })
    })

    function randCheck(){
        let s='';
        for(let i = 0;i<6;i++){
            s+=parseInt(Math.random()*10)
        }
        return s
    }

    function checkRegister(){
     if($('.reg-tele').val().length!=11)
        return 1;//错误1，手机号格式不对
        if($('.check-code').val()!=$('#pro_check_code').html())
        return 2;//错误2，验证码不对
        if($('.psd').val()!=$('.psd-again').val())
        return 3;//错误3，两次密码不相同
        if($('.psd').val()=='')
        return 4;
        return 0;//没有错误
    }

   

    $('#pro_check_code').click(function(){
        $(this).html(randCheck());
    })

    $('.registering').click(function(){
        let checkInfo = checkRegister();
        if(checkInfo==1)
        alert('手机号格式不对');
        if(checkInfo==2)
        alert('验证码不对')
        if(checkInfo==3){
            alert('两次密码不相同')
        }
       if(checkInfo==4){
           alert('密码不能为空');
       }
        if(checkInfo==0){

        $.ajax({
            url:'../interface/model/add_user.php',
            type:'GET',
            data:{
                user_tele:$('.reg-tele').val(),
                psd:$('.psd').val()
            },
            success:function(res){
               alert('注册成功');
               let cart_name='cart_'+$('.reg-tele').val();
               console.log(cart_name);
               $.ajax({
                   url:'../interface/model/create_table.php',
                   type:'get',
                   data:{
                       cart_name:cart_name,
                   }
               })
            },
            error:function(res){
                console.log(res);
                console.log('执行的时error函数')
            },

        })
        
            }


    })
    $('#logining').click(function(){
        let account = $('#account').val();
        let psd = $('#login-psd').val();
        if(account==''||psd==''){
            alert('帐号或密码不能为空');
            return 0;
        }
        $.ajax({
            url:'../interface/model/login.php',
            type:'get',
            data:{
                psd:psd,
                user_tele:account
            },
            success:function(res){
                // alert('登录成功');
                // let data = JSON.stringify(res)
                console.log(res);
                if(res==0){
                    alert('帐号或密码错误');
                    return 0;
                }
                else{
                    alert('登录成功');
                    let data = res;
                    data = data.split('=');
                    // console.log(data);
                    let i=0
                    for( i=0;i<data[0].length;i++){
                        if(data[0].charCodeAt(i)>=48&&data[0].charCodeAt(i)<=57)
                        break;
                    }
                    data[0]=data[0].substring(i);
                    console.log(data);
                    $.cookie('psd', data[1], { expires: 7 });
                    $.cookie('account', data[0], { expires: 7 });
                }
               
            },
            error:function(){
                console.log('执行的是error回调');
            }
        })
    })














})