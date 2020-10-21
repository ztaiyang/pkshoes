 

<?php 

//解决中文乱码问题：
header('content-type:text/html;charset=utf-8;');
$psd=$_GET['psd'];
$user_tele = $_GET['user_tele'];
//连接数据库；mysqli_connect(服务器ip,用户名，密码，小仓库的名称);
// print_r($psd);
// print_r($user_tele);
$conn=mysqli_connect('localhost','root','root','user');//参数都要引号，
//执行数据操作；
//mysqli_query(数据库连接信息，要执行的sql语句)
// $res=mysqli_query($conn,"SELECT * FROM `userinfo` where `user_tele`=='$user_tele'");
$sql = " SELECT * FROM `userinfo` WHERE `user_tele` = '$user_tele' AND `psd` = '$psd' ";
$res = mysqli_query($conn,$sql);
// print_r($res);
//解析数据；只有select(查询操作的结果，需要解析，其他操作大的结果不用解析也看得懂，只有true/false)，操作成功或失败
//mysqli_fetch_all(数据操作结果，MYSQLI_ASSOC);
$data=mysqli_fetch_assoc($res);
// $data=json_encode($data);
//断开数据库连接；mysqli_close(连接信息);

$ss=$user_tele."=".$psd;
if($data!='null'&&$data!=null){
   echo $ss;
}else{
   echo 0;
}
mysqli_close($conn);



?>
