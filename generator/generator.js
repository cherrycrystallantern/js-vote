function showRemoveBtn(treeId, treeNode) {
  return !treeNode.isFirstNode;
}

function addHoverDom(treeId, treeNode) {
  //Need css
  var sObj = $("#" + treeNode.tId + "_span");
  if (treeNode.editNameFlag || $("#addBtn_" + treeNode.tId).length > 0) {return;
  };
  var addStr = "<span class='button add' id='addBtn_" + treeNode.tId +
    "' title='add node' onfocus='this.blur();'></span>";
  sObj.after(addStr);
  var btn = $("#addBtn_" + treeNode.tId);
  if (btn) {btn.bind("click", function() {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
    zTree.addNodes(treeNode, { id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++) });
    return false;
  });};
};

function removeHoverDom(treeId, treeNode) {
  $("#addBtn_" + treeNode.tId).unbind().remove();
};

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
    enable: true,
    editNameSelectAll: true,
    showRemoveBtn: showRemoveBtn
  },
  check: {
    enable: true,
    chkStyle: 'radio'
  },
  view: {
    addHoverDom: addHoverDom,
    removeHoverDom: removeHoverDom,
    selectedMulti: false
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
          "name": v.name,
          "checked": v.checked } );
      }

    });

    $.each(qNodes, function(qNodesK, qNodesV) {
      var tmpArray = new Array();
      $.each(oNodes, function(oNodesK, oNodesV) {

        if (oNodesV.pId == qNodesV.id) {
          tmpArray.push(oNodesV);

          console.log(oNodesV);
          if (oNodesV.checked == true) {
            console.log(oNodesV);
            qNodes[ qNodesK ][ "right" ] = oNodesV.id;
          }
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
