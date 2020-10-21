<?php
require('./_connect_user.php');

//书写sql语句
$sql = "CREATE TABLE userinfo (
			user_tele VARCHAR(11) not null ,
			psd VARCHAR(300) NOT NULL
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>