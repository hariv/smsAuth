<?php
 if(!isset($_POST['phoneNumber']) || !isset($_POST['name']))
 {
    echo "Invalid da!!";
    exit(0);
 }
 $phoneNumber=$_POST['phoneNumber'];
 $name=$_POST['name'];
 $time=time();
 $smsResult=md5(md5($phoneNumber.$name.$time));
 echo $smsResult;
?>