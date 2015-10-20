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

$zTreeJson = json_encode($zTree);
echo $zTreeJson;
