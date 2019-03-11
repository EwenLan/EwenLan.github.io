var restaurantsList = ['a', 'b', 'c'];
var allRestaurantsList = [
    ["竹园餐厅", "海棠餐厅", "丁香餐厅"],
    ["竹园餐厅", "海棠餐厅", "丁香餐厅", "膳当家黄焖鸡米饭"],
    ["老综烤冷面", "第一佳大鸡排"]
];
function when(){
    var currentTime = new Date();
    if (currentTime.getHours() < 11 && currentTime.getHours() >= 4)
    {
        return "breakfast";
    }
    else if (currentTime.getHours() < 15 && currentTime.getHours() >= 11)
    {
        return "lunch";
    }
    else if(currentTime.getHours() < 21 && currentTime.getHours() >= 15)
    {
        return "dinner";
    }
    else
    {
        return "night snack";
    }
}
function getShop(){
    switch(when())
    {
        case "breakfast": return ["竹园餐厅", "海棠餐厅", "丁香餐厅"];
        case "lunch": return ["杨铭宇黄焖鸡米饭", "膳当家黄焖鸡米饭", "捞起鱼生", "菜饭骨头汤",
                                "锡纸排骨饭", "三顾冒菜", "西电小厨", "蘑菇爱上饭", "刘二姐川菜", "酸菜鱼"];
        case "dinner": return ["杨铭宇黄焖鸡米饭", "膳当家黄焖鸡米饭", "捞起鱼生", "菜饭骨头汤",
                                "锡纸排骨饭", "三顾冒菜", "西电小厨", "蘑菇爱上饭", "刘二姐川菜", "酸菜鱼"];
        case "night snack": return ["第一佳大鸡排", "新综烤冷面"];
    }
}
function refreshList() {
    let pageRestaurantsList = document.getElementById("restaurants-list");
    pageRestaurantsList.innerText = "";
    let removeList = document.getElementById('remove-selection');
    removeList.innerText = "";
    for(var i in restaurantsList) {
        let newLi = document.createElement('li');
        let newText = document.createTextNode(restaurantsList[i]);
        let newOptionText = document.createTextNode(restaurantsList[i]);
        newLi.appendChild(newText);
        newLi.setAttribute('class', 'list-group-item');
        pageRestaurantsList.appendChild(newLi);
        let newOption = document.createElement('option');
        newOption.appendChild(newOptionText);
        removeList.appendChild(newOption);
    }
}
$(document).ready(() => {
    /*
    var shop = getShop();
    var currentTime = new Date();
    var title = document.getElementById("title");
    var promotion = document.getElementById("promotion");
    switch(when())
    {
        case "breakfast": title.innerText = "早餐吃什么"; break;
        case "lunch": title.innerText = "午餐吃什么"; break;
        case "dinner": title.innerText = "晚餐吃什么"; break;
        case "night snack": title.innerText = "夜宵吃什么"; break;
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
    */
    // New code
    let displayed_title = document.getElementById("displayed-title");
    var this_domain = when();
    switch(this_domain)
    {
        case "breakfast": 
            displayed_title.innerText = "早餐吃什么"; 
            restaurantsList = allRestaurantsList[0];
            break;
        case "lunch": 
            displayed_title.innerText = "午餐吃什么"; 
            restaurantsList = allRestaurantsList[1];
            break;
        case "dinner": 
            displayed_title.innerText = "晚餐吃什么"; 
            restaurantsList = allRestaurantsList[1];
            break;
        case "night snack": 
            displayed_title.innerText = "夜宵吃什么"; 
            restaurantsList = allRestaurantsList[2];
            break;
    }
    // let pageRestaurantsList = document.getElementById("restaurants-list");
    let answerDiv = document.getElementById('answer-div');
    // pageRestaurantsList.innerText = "";
    answerDiv.innerText = "";
    // for(var i in restaurantsList) {
    //     let newLi = document.createElement('li');
    //     let newText = document.createTextNode(restaurantsList[i]);
    //     newLi.appendChild(newText);
    //     newLi.setAttribute('class', 'list-group-item');
    //     pageRestaurantsList.appendChild(newLi);
    // }
    refreshList();
})
function randomSelect() {
    var shop = getShop();
    var currentTime = new Date();
    var numToSelect = shop.length;
    var select = Math.floor(Math.random() * numToSelect);
    var answer = document.getElementById("answer");
    answer.innerText = shop[select];
}
function newRandomSelect() {
    let selection = restaurantsList[Math.floor(Math.random()*restaurantsList.length)];
    let answerDiv = document.getElementById('answer-div');
    answerDiv.innerText = "";
    let newAnswer = document.createElement('div');
    let newAnswerText = document.createTextNode(`我们的决定是：${selection}。`);
    newAnswer.appendChild(newAnswerText);
    newAnswer.setAttribute('class', 'alert alert-success');
    answerDiv.appendChild(newAnswer);
}
function addNewItem() {
    let newItemInputBox = document.getElementById('new-item-input');
    if(newItemInputBox.value != "") {
        restaurantsList.push(newItemInputBox.value);
        newItemInputBox.value = "";
        refreshList();
    }
}
function removeItem() {
    let removeSelection = document.getElementById('remove-selection');
    let newRestaurantsList = [];
    for(var i in restaurantsList) {

    }
}