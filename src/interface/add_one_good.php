<?php
// require('./model/_connect.php');
header('content-type:text/html;charset=utf8');

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "shop";

//创建连接
$conn = mysqli_connect($servername,$username,$password,$dbname);
if(mysqli_connect_error()){
	die('连接失败');
}

//获取前端的参数
$account = "cart_".$_REQUEST['user_tele'];
$id = $_REQUEST['id'];//商品id
// $name = $_REQUEST['name'];//商品name
// $img = $_REQUEST['img'];//商品img
// $price = $_REQUEST['price'];//商品price
$num = $_REQUEST['num'];//商品数量
//根据前端参数插入数据
$sql = "SELECT * FROM $account WHERE `product_id`='$id'";
$res = mysqli_query($conn,$sql);

$rows = mysqli_num_rows($res);//mysqli_num_rows方法是统计查询结果有几行
if($rows>0){
	$row = mysqli_fetch_assoc($res);//获取当前行数据,转成php数组
	$num = $row['product_num']+$num;
	$sql = "UPDATE `$account` SET `product_num`='$num' WHERE `product_id`='$id'";
}else{
	$sql = "INSERT INTO `$account` (`product_id`,`product_img`,`product_name`,`product_num`,`product_price`) VALUES ('$id','$img','$name','$num','$price')";
}

$result = mysqli_query($conn,$sql);
if (!$result) {
    printf("Error: %s\n", mysqli_error($conn));
    exit();
}
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}

?>