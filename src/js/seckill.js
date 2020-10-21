'use strict'
function formate(s){
    if(s<10)
    s='0'+s;
    return s
}
$(function(){
    
    $.get('../json/sec_kill_data.json',function(res){
        let data = res;
        console.log(data)
        $.each(data,function(i,v){
            $('.first-good').after(`<div class="seckill-goods " id='${v.id}'>
            <a href=""><img src=${v.path} alt="">
                <span>距结束0天12时56分12秒</span>
            </a>
            <div class='price'>
                <p>${v.p}</p>
                <p>秒杀价
                    <i>${v.i_1}</i>
                    <i>${v.i_2}</i>
                </p>
                <p>立即购买</p>
            </div>
        </div>`)
        })
        
        $('.seckill-goods').click(function(e){
            var goodId = $(this).attr("id");
            console.log(goodId)
            location.href="./details.html?id="+goodId;
         
            return false;
        })
        
    })
    function clock(){
        let  now = new Date();
     
        let time = new Date('2020-11-11 0:0:0')
        
        let tt = time.getTime()-now.getTime();
       
        let day = parseInt(tt/(3600*24*1000))
        day=formate(day)
        tt=tt%(3600*24*1000)
        let hour = parseInt(tt/(1000*3600))
        hour=formate(hour)
        tt=tt%(1000*3600)
        let minute = parseInt(tt/(1000*60))
        minute=formate(minute)
        tt=tt%(1000*60)
       
        let second= parseInt(tt/(1000))
        second=formate(second)
     
        let ss=`距结束${day}天${hour}时${minute}分${second}秒`;
        return ss;
    }
  
     let info = clock();
     let timer =setInterval(function(){
        $('.seckill-goods>a span ').html(clock())
     },1000)

     $('.willseckilling').click(function(){
        $(this).css({
            backgroundColor:'red'
        })
        $('.seckillinging').css({
            backgroundColor:'silver'
        })
        $('.section-goods').css({
            display:'none'
        })
     }
     )
        
     $('.seckillinging').click(function(){
         $(this).css({
             backgroundColor:'red'
         })
         $('.willseckilling').css({
             backgroundColor:'silver'
         })
         $('.section-goods').css({
             display:'block'
         })
     })
    







})