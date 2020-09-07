// 手机侧边栏默认不展开
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
    "menus_item_child"
);
var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " menus-closed";
}

var xiaokang = new xkTool(param1,param2);
var xiaokang = new xkTool();
var xiaokang = new xkTool(
    "https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg"
  );
var xiaokang = new xkTool("transparent");



xiaokang.footFish();

