//-打字特效
//-陣列
var texts = ["現在午夜囉~", "你還清醒嗎?", "是不是不太舒服呀~唏唏唏~"]
//-打字數度
var speed = 500;
//-編號
var index = 0;
//-字數
var count = 0;
//-要寫入的id
var id = "typekey"

function type(){
    var box = document.getElementById(id);
    //-再宣告一個變數為切割後的字 slice為texts陣列(編號)的字進行(從0開始，切割到count++ => 1 個字的字
    var slice = texts[index].slice(0, count++);
    //-寫入編號位數的字串
    box.innerHTML = slice;
    //-循環執行的重點 (方法名稱, 間隔時間(毫秒)
    setTimeout(type, speed);
    //-當字數大於總長度時，字數歸零
    if(count > texts[index].length){
        count = 0;
        index++;
    }

    if (index == texts.length){
        index = 0;
    }






    // box.innerHTML = texts[index];
}
//當載入完成時執行方法type
document.addEventListener("DOMContentLoaded", type);