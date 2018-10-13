var shop = [];
$(document).ready(() => {
    var currentTime = new Date();
    var title = document.getElementById("title");
    var promotion = document.getElementById("promotion");
    if (currentTime.getHours() < 11)
    {
        shop = ["竹园餐厅", "海棠餐厅", "丁香餐厅"];
        title.innerText = "早餐吃什么";
    }
    else if (currentTime.getHours() < 15)
    {
        shop = ["杨铭宇黄焖鸡米饭", "膳当家黄焖鸡米饭", "捞起鱼生", "菜饭骨头汤",
                "锡纸排骨饭", "三顾冒菜", "西电小厨", "蘑菇爱上饭", "刘二姐川菜"];
        title.innerText = "午餐吃什么";
    }
    else if(currentTime.getHours() < 21)
    {
        shop = ["杨铭宇黄焖鸡米饭", "膳当家黄焖鸡米饭", "捞起鱼生", "菜饭骨头汤",
                "锡纸排骨饭", "三顾冒菜", "西电小厨", "蘑菇爱上饭", "刘二姐川菜"];
        title.innerText = "晚餐吃什么";
    }
    else
    {
        var shop = ["第一佳大鸡排", "新综烤冷面"];
        title.innerText = "夜宵吃什么"
    }
    promotion.innerText = "点击下方的“抽取”，系统就会自动在";
    for(i = 0; i < shop.length - 1; ++i)
    {
        promotion.innerText += shop[i];
        promotion.innerText += "、";
    }
    if(shop.length)
    {
        promotion.innerText += shop[shop.length - 1];
    }
    promotion.innerText += "中抽取一家幸运店铺。";
})
function randomSelect() {
    var currentTime = new Date();
    var numToSelect = shop.length;
    var select = Math.floor(Math.random() * numToSelect);
    var answer = document.getElementById("answer");
    answer.innerText = shop[select];
}