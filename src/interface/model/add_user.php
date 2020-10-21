 

<?php 

 //解决中文乱码问题：
 header('content-type:text/html;charset=utf-8;');
//  $char="我是李白。。。。";
//  echo $char;
//  print_r($_GET);
 $psd=$_GET['psd'];
 $user_tele = $_GET['user_tele'];
//连接数据库；mysqli_connect(服务器ip,用户名，密码，小仓库的名称);

 $conn=mysqli_connect('localhost','root','root','user');//参数都要引号，
//执行数据操作；
//mysqli_query(数据库连接信息，要执行的sql语句)
// $res=mysqli_query($conn,"SELECT * FROM `userinfo` where `user_tele`=='$user_tele'");
$sql = "select * from `userinfo` where `user_tele`='$user_tele'";
$res = mysqli_query($conn,$sql);
// print_r($res);
//解析数据；只有select(查询操作的结果，需要解析，其他操作大的结果不用解析也看得懂，只有true/false)，操作成功或失败
//mysqli_fetch_all(数据操作结果，MYSQLI_ASSOC);
$data=mysqli_fetch_assoc($res);
// $data=json_encode($data);
// print_r($res);
//断开数据库连接；mysqli_close(连接信息);

if($data){
	echo '该手机号已被注册';
}else{
	// $sql = "select *from `userinfo`";
	$sql = "INSERT INTO `userinfo`(`psd`) values ('$psd')";
	// $res=mysqli_query($conn,$sql);
	
	mysqli_query($conn,"INSERT INTO `userinfo`(`user_tele`,`psd`) values ('$user_tele','$psd')");
	// mysqli_query($conn,"INSERT INTO `userinfo`(`psd`) values ('$psd')");
	// $data=mysqli_fetch_all($res,MYSQLI_ASSOC);
	// print_r($data);
	// print_r (['1'=>'成功']);
	echo '注册成功';
	// echo json_decode('注册成功');
}
mysqli_close($conn);



?>
