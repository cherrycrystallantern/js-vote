<?php

$voteJson = file_get_contents('js-vote.json');
$voteJsondecode = json_decode($voteJson, true);

$i = 0;
foreach ($voteJsondecode['question'] as $questionId => $questionContent) {
    $zTree[$i]['id'] = $questionContent['id'];
    $zTree[$i]['pId'] = 0;
    $zTree[$i]['name'] = $questionContent['qTitle'];
    $zTree[$i]['qInfo'] = $questionContent['qInfo'];
    $zTree[$i]['qPic'] = $questionContent['qPic'];
    $zTree[$i]['qChoice'] = $questionContent['qChoice'];
    $zTree[$i]['isParent'] = true;
    ++$i;
    foreach ($questionContent['qOption'] as $id => $option) {
        $optionId = $id + $questionContent['id'] * 10;
        $zTree[$i]['id'] = $optionId;
        $zTree[$i]['pId'] = $questionContent['id'];
        $zTree[$i]['isParent'] = false;
        $zTree[$i]['name'] = $option;
        ++$i;
    }
}

//var_dump($zTree);
$zTreeJson = json_encode($zTree);
echo $zTreeJson;
/*
{ "id":1, "pId":0, "name":"按公司选择", "root":"company" , "isParent": true},
{ "id":11, "pId":1, "name":"英特尔", "company":"英特尔" },
{ "id":12, "pId":1, "name":"超微半导体", "company":"超微半导体" },


array(6) {
    ["id"]=>
    int(1)
    ["qTitle"]=>
    string(15) "Question1 title"
    ["qInfo"]=>
    string(21) "Question1 information"
    ["qPic"]=>
    string(21) "Question1 Picture URL"
    ["qChoice"]=>
    string(1) "s"
    ["qOption"]=>
    array(3) {
      [1]=>
      string(25) "This is Question1 Option1"
      [2]=>
      string(25) "This is Question1 Option2"
      [3]=>
      string(25) "This is Question1 Option3"
    }
*/
