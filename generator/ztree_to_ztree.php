<?php

$zTree1 = file_get_contents('ztree.json');
$zTree1decode = json_decode($zTree1, true);
$zTree1Ajax = array();

foreach ($zTree1decode as $key => $value) {
    $zTree1Ajax[] = $value;
}

$zTree1AjaxJson = json_encode($zTree1Ajax);
echo $zTree1AjaxJson;
