<?php
/* if(!isset($_POST['phoneNumber']) || !isset($_POST['name']))
 {
    echo "Invalid da!!";
    exit(0);
 }*/
 require_once('unirest-php/lib/Unirest.php');
 /*require_once('unirest-php/lib/Unirest.php');
 $phoneNumber=$_POST['phoneNumber'];
 $name=$_POST['name'];
 $time=time();
 $smsResult=md5($phoneNumber.$name.$time);
 $url="https://site2sms.p.mashape.com/index.php?uid=8348121945&pwd=330666&phone=8144064012&msg=".$smsResult;
 $response=Unirest::get($url,array("X-Mashape-Authorization"=>"hjKGftDlUAZkFZ2ZjWjtMAIjpJu6CVzL"),null);
 echo $response->code;*/
  $output= shell_exec("curl --include --request GET 'https://site2sms.p.mashape.com/index.php?uid=8438121945&pwd=330666&phone=8144064012&msg=Mahadev' --header 'X-Mashape-Authorization: hjKGftDlUAZkFZ2ZjWjtMAIjpJu6CVzL'");
 echo $output;
/* $output=Unirest::get("https://site2sms.p.mashape.com/index.php?uid=8438121945&pwd=330666&phone=8144064012&msg=Thanks",array("X-Mashape-Authorization" => "hjKGftDlUAZkFZ2ZjWjtMAIjpJu6CVzL"),null);*/
?>