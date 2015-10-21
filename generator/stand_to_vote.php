<?php

$standJson = file_get_contents('stand.json');
$standJsondecode = json_decode($standJson, true);

$voteTree['mTitle'] = $standJsondecode['mTitle'];
$voteTree['mInfo'] = $standJsondecode['mInfo'];
$voteTree['mPic'] = $standJsondecode['mPic'];

$i = 0;
foreach ($standJsondecode['question'] as $questionId => $questionContent) {
    $voteQuestion[$i]['id'] = $questionContent['id'];
    //$voteQuestion[$i]['pId'] = 0;
    $voteQuestion[$i]['qTitle'] = $questionContent['name'];
    $voteQuestion[$i]['qInfo'] = $questionContent['qInfo'];
    $voteQuestion[$i]['qPic'] = $questionContent['qPic'];
    $voteQuestion[$i]['qChoice'] = $questionContent['qChoice'];
    //$voteQuestion[$i]['isParent'] = true;
    //++$i;
    $tmp = json_decode($questionContent['optionStr'], true);
    //print_r($tmp);
    foreach ($tmp as $id => $optionStr) {
        //$optionId = $id + $questionContent['id'] * 10;
        //$voteQuestion[$i]['id'] = $option['id'];
        //$voteQuestion[$i]['pId'] = $option['pId'];
        //$voteQuestion[$i]['isParent'] = false;
        //$voteQuestion[$i]['name'] = $option['name'];
        //++$i;
        //$optionStr['id'];
        //$optionStr['pId'];
        //$optionStr['name'];
        $optionId = $optionStr['id'];
        //print_r($optionId);
        //print_r($optionStr['name']);
        $voteQuestion[$i]['qOption'][$optionId] = $optionStr['name'];
        //print_r($voteQuestion[$i]['qOption'][$optionId]);
    }

    $voteTree['question'] = $voteQuestion;
    ++$i;
}

$voteTreeJson = json_encode($voteTree);
echo $voteTreeJson;
