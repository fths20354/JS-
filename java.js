//-打字特效
//-陣列
var texts = ["現在午夜囉~", "你還清醒嗎?", "是不是不太舒服呀~唏唏唏~"]
//-打字數度
var speed = 1000;
//-編號
var index = 0;
//-字數
var count = 0;
//-要寫入的id
var id = "typekey"

function type(){
    var box = document.getElementById(id);
    box.innerHTML = texts[index];
}
//當載入完成時執行方法type
document.addEventListener("DOMContentLoaded", type);