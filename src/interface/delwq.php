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


$account = 'cart_'.$_REQUEST['user_tele'];
$id = $_REQUEST['id'];
//根据id删除数据
$sql = "DELETE FROM $account WHERE `product_id`= '$id' ";
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