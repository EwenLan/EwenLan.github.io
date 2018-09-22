$(document).ready(() => {
    var title = document.getElementById("title");
    var currentTime = new Date();
    if (currentTime.getHours() < 15)
    {
        title.innerText = "午餐吃什么";
    }
    else
    {
        title.innerText = "晚餐吃什么";
    }
})
function randomSelect() {
    var shop = ["杨铭宇黄焖鸡米饭", "膳当家黄焖鸡米饭", "捞起鱼生", "菜饭骨头汤", "锡纸排骨饭", "三顾冒菜", "西电小厨"];
    var numToSelect = shop.length;
    var select = Math.floor(Math.random() * numToSelect);
    var answer = document.getElementById("answer");
    answer.innerText = shop[select];
}