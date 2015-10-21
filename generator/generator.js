var zSetting = {
  data: {
    simpleData: {
      enable: true
    }
  },
  async: {
    enable: true,
    url: "stand_to_ztree.php",
    autoParam: [ "id" ]
  },
  edit: {
    enable: true
  },
  check: {
    enable: true,
    chkStyle: 'radio'
  }
};

$(document).ready(function() {

  $.fn.zTree.init($("#zTree"), zSetting);

  $("#button_sub").click(function() {
    var treeObj = $.fn.zTree.getZTreeObj("zTree");
    var nodesArray = treeObj.transformToArray(treeObj.getNodes());
    var qNodes = new Array();
    var oNodes = new Array();

    $.each(nodesArray, function(k, v) {

      if (v.isParent) {
        qNodes.push( { "id": v.id,
          "name": v.name,
          "qInfo": v.qInfo,
          "qPic": v.qPic,
          "qChoice": v.qChoice } );
      } else {
        oNodes.push( { "id": v.id,
          "pId": v.pId,
          "name": v.name } );
      }

    });

    $.each(qNodes, function(qNodesK, qNodesV) {
      var tmpArray = new Array();
      $.each(oNodes, function(oNodesK, oNodesV) {

        if (oNodesV.pId == qNodesV.id) {
          tmpArray.push(oNodesV);
        }
      });

      qNodes[ qNodesK ][ "optionStr" ] = JSON.stringify(tmpArray);
    });

    qJson =  {
      "mTitle": "This is main title",
      "mInfo": "This is main information",
      "mPic": "This is main title picturl url",
      "question":qNodes
    };

    console.log(JSON.stringify(qJson));

  });
});
