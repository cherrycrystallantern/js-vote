<?php

$standJson = file_get_contents('stand.json');
$standJsondecode = json_decode($standJson, true);

$voteTree['mTitle'] = $standJsondecode['mTitle'];
$voteTree['mInfo'] = $standJsondecode['mInfo'];
$voteTree['mPic'] = $standJsondecode['mPic'];

$i = 0;
foreach ($standJsondecode['question'] as $questionId => $questionContent) {
    $voteQuestion[$i]['id'] = $questionContent['id'];
    $voteQuestion[$i]['qTitle'] = $questionContent['name'];
    $voteQuestion[$i]['qInfo'] = $questionContent['qInfo'];
    $voteQuestion[$i]['qPic'] = $questionContent['qPic'];
    $voteQuestion[$i]['qChoice'] = $questionContent['qChoice'];
    $tmp = json_decode($questionContent['optionStr'], true);

    foreach ($tmp as $id => $optionStr) {
        $optionId = $optionStr['id'];
        $voteQuestion[$i]['qOption'][$optionId] = $optionStr['name'];
    }

    $voteTree['question'] = $voteQuestion;
    ++$i;
}

$voteTreeJson = json_encode($voteTree);
echo $voteTreeJson;
