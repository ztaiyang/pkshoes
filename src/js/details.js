'use strict'
$(function(){
console.log(location.href)
let para = location.search;
para=para.split('=')[1]
console.log(para)
var infoGood = null;
var idGood;
var nameGood;
var priceGood;
var imgGood;
$.get('../json/data_all.json',function(res){
    console.log(res)
    let data = res;
    $.each(data,function(i,v){
        console.log(v.id)
        if(v.id==para){
            console.log('找到了,'+v.path)
            $('.pic-pic img' ).attr({
                src:v.path
            });
            $('.opt img' ).attr({
                src:v.path
            });
            $('.select-color>div img' ).attr({
                src:v.path,
                height:60,
                width:60
            });
             idGood = v.id;
             priceGood = v.i_1||v.span1;
             nameGood = v.p;
            imgGood = v.path;
            infoGood = idGood+'='+nameGood+'='+imgGood+'='+priceGood;
        }

    })
    $('.add-cart').click(function(){
        if($.cookie('account')){
            console.log($.cookie('account'))
            var s=new String(priceGood).substring(1)
            console.log(s);
           $.ajax({
               url:'../interface/addwq.php',
               type:'get',
               data:{
                   id:idGood,
                   name:nameGood,
                   img:imgGood,
                   price:priceGood.substring(1),
                   num:1,
                   user_tele:$.cookie('account')
               },
               success:function(res){
                alert('加入购物车成功');
               }

           })
           
            // location.href="./cart.html?id="+infoGood;
        }else{
            location.href='./login-register.html'
        }
    })
    
})
















})