<?php
// require('./_connect.php');
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
$cart_name=$_REQUEST['cart_name'];
// echo $cart_name;
//书写sql语句
$sql = "CREATE TABLE $cart_name(
			product_id VARCHAR(300) NOT NULL PRIMARY KEY,
			product_name VARCHAR(300) NOT NULL,
			product_img VARCHAR(30) NOT NULL,
			product_price VARCHAR(30) NOT NULL,
			product_num VARCHAR(30) NOT NULL
			
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>