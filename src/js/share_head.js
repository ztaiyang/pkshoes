$(function(){

    $('.all-goods').hover(function(){
        $('.menu-first').css({
            display:'block'
        })
    },function(){
        $('.menu-first').css({
            display:'none'
        })
    })


    $('.basketball').hover(function(){
        $('.menu-second').css({
            display:'block'
        })
    },function(){
        $('.menu-second').css({
            display:'none'
        })
    })


    $('.running').hover(function(){
        $('.menu-third').css({
            display:'block'
        })
    },function(){
        $('.menu-third').css({
            display:'none'
        })
    })

    $('.ul-left').click(function(){
        location.href='./index.html';
    })

    $('.go-to-cart').click(function(e){
        console.log('abababa')
        if($.cookie('account')){
        location.href='./cart.html';
        }else{
            location.href='./login-register.html';
        }
        return false;
    })




















})