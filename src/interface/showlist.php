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
// print_r($_REQUEST['user_tele']);
$account = "cart_".$_REQUEST['user_tele'];
//书写sql语句
$sql = "SELECT * FROM $account";

//执行sql语句
$result = mysqli_query($conn,$sql);
if (!$result) {
    printf("Error: %s\n", mysqli_error($conn));
    exit();
}
if(mysqli_num_rows($result)>0){	
	$arr = mysqli_fetch_all($result,MYSQL_ASSOC);
	echo json_encode(array("code"=>1,"data"=>$arr));
}else{	
	echo json_encode(array("code"=>0));
}


?>