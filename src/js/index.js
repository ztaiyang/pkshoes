// /* 
//     首页的特效
//     轮播图
//     二级菜单
// */
// //二级菜单
'use strict'
$(function(){
    // console.log('lllllll')
    console.log('pppppppppppppp')
    //以下是二级菜单
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
    //轮播图
    function light(i){
        
        $('.banner .span-arr span').css({
            backgroundColor:'transparent'
        })
        $('.banner .span-arr span').eq(i).css({
            backgroundColor:'red'
        })
    }
    $('.img1').hover(function(){
     
        $(this).attr({
            src:"../imgs/iconR.png"
        })
    },function(){
        $(this).attr({
            src:'../imgs/icon2.png'
        })
    })

    $('.img2').hover(function(){
        
        $(this).attr({
            src:"../imgs/iconR1.png"
        })
    },function(){
        $(this).attr({
            src:'../imgs/icon1.png'
        })
    })

    $('.banner').prop({
        bgIndex:0,
        tarIndex:0
    })
    $('.banner').prop('timer',null);
    let timer = $('.banner').prop('timer');
    timer = setInterval(function(){
        let tarIndex= $('.banner').prop('bgIndex')+1;
        if(tarIndex>5){
            tarIndex=0;
            $('.banner').css(
                'background-image','url('+bgArr[tarIndex]+')'
             )
             light(tarIndex)
        }else{
            $('.banner').css(
                'background-image','url('+bgArr[tarIndex]+')'
             )
             light(tarIndex)

        }
        $('.banner').prop({
            bgIndex:tarIndex
        })
    },2000)
    $('.banner').hover(function(){
        clearInterval(timer)
        // console.log('pppppppppp')
    },function(){
        timer = setInterval(function(){
            let tarIndex= $('.banner').prop('bgIndex')+1;
            if(tarIndex>5){
                tarIndex=0;
                $('.banner').css(
                    'background-image','url('+bgArr[tarIndex]+')'
                 )
                 light(tarIndex);
            }else{
                $('.banner').css(
                    'background-image','url('+bgArr[tarIndex]+')'
                 )
                 light(tarIndex);
            }
            $('.banner').prop({
                bgIndex:tarIndex
            })
        },2000)
    })
    // $('.banner').prop('bgIndex',0);
    // $('.banner').prop('tarIndex',0);

    var bgArr=['../imgs/index-bg0.jpg',
    '../imgs/index-bg1.jpg',
    '../imgs/index-bg2.jpg',
    '../imgs/index-bg3.jpg',
    '../imgs/index-bg4.jpg',
    '../imgs/index-bg5.jpg'
     ]
    $('.img1').click(function(){//上一张
      let tarIndex = $('.banner').prop('bgIndex')-1;
    //   console.log($('.banner').prop('bgIndex'))
      if(tarIndex<0){//循环
        tarIndex=5;
        $('.banner').css(
           'background-image','url('+bgArr[tarIndex]+')'
        )
        light(tarIndex)
      }else{
        $('.banner').css(
            'background-image','url('+bgArr[tarIndex]+')'
         )
        light(tarIndex)

      }
      $('.banner').prop({
        bgIndex:tarIndex
    })
    })

    $('.img2').click(function(){
        let tarIndex= $('.banner').prop('bgIndex')+1;
        if(tarIndex>5){
            tarIndex=0;
            $('.banner').css(
                'background-image','url('+bgArr[tarIndex]+')'
             )
        light(tarIndex)

        }else{
            $('.banner').css(
                'background-image','url('+bgArr[tarIndex]+')'
             )
        light(tarIndex)

        }
        $('.banner').prop({
            bgIndex:tarIndex
        })
    })
    let liHeight=$('.first-li').height()
    $('.last-li').height(liHeight)
 

    $('.span-arr span').click(function(){
      
        let tarIndex=$(this).index();
        $('.banner').css(
            'background-image','url('+bgArr[tarIndex]+')'
        )
        light(tarIndex);
    })

//     $('.first-li').after($(`<li>
//     <a href="./details.html">
//         <img src="../imgs/shoes.jpg" alt="">
//     </a>
//     <p>态极【闪现】男子高中配色篮球鞋</p>
//     <div>
//         <span>￥599</span>
//         <span>￥599</span>
//     </div>
// </li>`))
    // $('.first-li').after($('<p>你好</p>'))
    let addLi = $(` <li>
    <a href="./details.html">
        <img src="../imgs/shoes.jpg" alt="">
    </a>
    <p>态极【闪现】男子高中配色篮球鞋</p>
    <div>
        <span>￥599</span>
        <span>￥599</span>
    </div>
</li>`);

    
      
        $.get('../json/index_data.json',function(res){
            let data = res;
           $.each(data,function(i,v){
               $('.last-li').before($(` <li id=${v.id} class='add-li goods'>
               <a href="">
                   <img src=${v.path} alt="">
               </a>
               <p class='pic-title'>${v.p}</p>
               <div>
                   <span>${v.span1}</span>
                   <span>${v.span2}</span>
               </div>
           </li>`))
           })
           $('.goods').click(function(e){
            var goodId = $(this).attr("id");
            console.log(goodId)
            location.href="./details.html?id="+goodId;
            return false;
        })
        })
      
        $('.last-list').on('click',function(){
            
        })
        $.get('../json/index_data_more.json',function(res){
            let data = res;
            console.log(res)
           $('.last-li').click(function(){
               $('.sec-goods-ul').remove('.add-li');
            $.each(data,function(i,v){
                $('.last-li').before($(` <li id=${v.id} class='add-li'>
                <a href="">
                    <img src=${v.path} alt="">
                </a>
                <p class='pic-title'>${v.p}</p>
                <div>
                    <span>${v.span1}</span>
                    <span>${v.span2}</span>
                </div>
            </li>`))
            })
           })
           $('.goods').click(function(e){
            var goodId = $(this).attr("id");
            console.log(goodId)
            location.href="./details.html?id="+goodId;
            return false;
        })
        })

        $('.ul-left').click(function(){
            location.href='./index.html';
        })
        $('.go-to-cart').click(function(e){
            if($.cookie('account')){
            location.href='./cart.html';
            }else{
                location.href='./login-register.html';
            }
            return false;
        })
      
})
