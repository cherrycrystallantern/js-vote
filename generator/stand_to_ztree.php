<?php

$standJson = file_get_contents('stand.json');
$standJsondecode = json_decode($standJson, true);

$i = 0;
foreach ($standJsondecode['question'] as $questionId => $questionContent) {
    $zTree[$i]['id'] = $questionContent['id'];
    $zTree[$i]['pId'] = 0;
    $zTree[$i]['name'] = $questionContent['name'];
    $zTree[$i]['qInfo'] = $questionContent['qInfo'];
    $zTree[$i]['qPic'] = $questionContent['qPic'];
    $zTree[$i]['qChoice'] = $questionContent['qChoice'];
    $zTree[$i]['isParent'] = true;
    $zTree[$i]['nocheck'] = true;
    ++$i;
    $tmp = json_decode($questionContent['optionStr'], true);
    foreach ($tmp as $id => $option) {
        $zTree[$i]['id'] = $option['id'];
        $zTree[$i]['pId'] = $option['pId'];
        $zTree[$i]['isParent'] = false;
        $zTree[$i]['name'] = $option['name'];
        ++$i;
    }
}

$zTreeJson = json_encode($zTree);
echo $zTreeJson;
