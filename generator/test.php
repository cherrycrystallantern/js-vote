<?php

date_default_timezone_set('Asia/Shanghai');
$zTree1 = file_get_contents('test.json');
$zTree1decode = json_decode($zTree1, true);
/*
$pId = '0';

if (array_key_exists('id', $_REQUEST)) {
    $pId = $_REQUEST['id'];
}
*/
$zTree1Ajax = array();

foreach ($zTree1decode as $key => $value) {
    //if ($value['pId'] == $pId) {
        $zTree1Ajax[] = $value;
    //}
}

  $zTree1Ajax[] = array('id' => $key + 1,'pId' => $pId,'name' => date('M j H:i:s'));

$zTree1AjaxJson = json_encode($zTree1Ajax);
echo $zTree1AjaxJson;
