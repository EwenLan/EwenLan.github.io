$(document).ready(() => {
    var title = document.getElementById("title");
    var currentTime = new Date();
    if (currentTime.getHours() < 11)
    {
        title.innerText = "早餐吃什么";
    }
    else if (currentTime.getHours() < 15)
    {
        title.innerText = "午餐吃什么";
    }
    else if(currentTime.getHours() < 21)
    {
        title.innerText = "晚餐吃什么";
    }
    else
    {
        title.innerText = "夜宵吃什么"
    }
})
function randomSelect() {
    var currentTime = new Date();
    var shop = [];
    if (currentTime.getHours() < 11)
    {
        shop = ["竹园餐厅", "海棠餐厅", "丁香餐厅"];
    }
    else if (currentTime.getHours() < 15)
    {
        shop = ["杨铭宇黄焖鸡米饭", "膳当家黄焖鸡米饭", "捞起鱼生", "菜饭骨头汤",
                "锡纸排骨饭", "三顾冒菜", "西电小厨", "蘑菇爱上饭", "刘二姐川菜"];
    }
    else if(currentTime.getHours() < 21)
    {
        shop = ["杨铭宇黄焖鸡米饭", "膳当家黄焖鸡米饭", "捞起鱼生", "菜饭骨头汤",
                "锡纸排骨饭", "三顾冒菜", "西电小厨", "蘑菇爱上饭", "刘二姐川菜"];
    }
    else
    {
        var shop = ["第一佳大鸡排", "新综烤冷面"];
    }
    var numToSelect = shop.length;
    var select = Math.floor(Math.random() * numToSelect);
    var answer = document.getElementById("answer");
    answer.innerText = shop[select];
}