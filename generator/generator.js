var zSetting = {
  data: {
    simpleData: {
      enable: true
    }
  },
  async: {
    enable: true,
    url: "test.php",
    autoParam: [ "id" ]
  }
};



$(document).ready(function() {

  $.fn.zTree.init($("#zTree"), zSetting);

  $("#button_sub").click(function() {
    var treeObj = $.fn.zTree.getZTreeObj("zTree");
    var nodesArray = treeObj.transformToArray(treeObj.getNodes());
    var nodesinfo = new Array();
    $.each(nodesArray, function(k, v) {
      nodesinfo.push([ { 'id': v.id, 'name': v.name } ]);
    });
    console.log(nodesinfo);
  });
});
