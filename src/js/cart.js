'use strict'
$(function(){
    // console.log(location.href)
    // let para = location.search;
    // para =decodeURI(para).split('=');
    // para.shift();
    // console.log(para);
    // let idGood = para[0];
    // let nameGood = para[1];
    // let imgGood = para[2];
    // let priceGood  = para[3];
    // console.log(idGood,nameGood,imgGood,priceGood);

    $.ajax({
        url:'../interface/showlist.php',
        data:{
            user_tele:$.cookie('account'),
        },
        type:'get',
        success:function(res){
        let data =JSON.parse(res)
            console.log(data.data)
          let length = data.data.length;
            $.each(data.data,function(i,v){
                // console.log(v)
                $('tbody').append(`<tr>
                <td>${v.product_id}</td>
                <td><span>${v.product_name}</span></td>
                <td ><img class='cart-img' src=${v.product_img} alt=""></td>
                <td class='price'><span>${v.product_num}</span></td>
                <td>￥${v.product_price}</td>
                <td><span class='add-goods ' index=${v.product_id}>+</span>
                <span class='del' index=${v.product_id}>删除</span>
                <span class='sub-goods' index=${v.product_id}>-</span> </td>
            </tr>`)
            })
            $('.add-goods').click(function(){
                console.log($(this).attr('index'));
                let x = parseInt($(this).parent().prev().prev().children().html());
                x++;
                $(this).parent().prev().prev().children().html(x)
                console.log(x)
                $.ajax({
                    url:'../interface/add_one_good.php',
                    type:'get',
                    data:{
                        user_tele:$.cookie('account'),
                        id:$(this).attr('index'),
                        num:1
                    },
                    success:function(res){
                        console.log(res);
                        console.log('添加成功')
                    }
                })
            })

            $('.del').click(function(){
                let index = $(this).attr('index');
                console.log(index)
                $(this).parent().parent().css({
                    display:'none'
                })
                $.ajax({
                    url:'../interface/delwq.php',
                    data:{
                        user_tele:$.cookie('account'),
                        id:index
                    },
                    type:'get'
                })
            })
            $('.sub-goods').click(function(){
                console.log($(this).attr('index'));
                let x = parseInt($(this).parent().prev().prev().children().html());
                if(x==1)
                return;
                x--;
                $(this).parent().prev().prev().children().html(x)
                console.log(x)
                $.ajax({
                    url:'../interface/delete_one_good.php',
                    type:'get',
                    data:{
                        user_tele:$.cookie('account'),
                        id:$(this).attr('index'),
                        num:1
                    },
                    success:function(res){
                        console.log(res);
                        console.log('删除成功')
                    }
                })
            })


        }

    })


















})

