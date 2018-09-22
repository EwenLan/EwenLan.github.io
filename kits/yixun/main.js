function transform(){
    // var stu_id = document.getElementsByName("student_id")[0].value;
    document.getElementById("answer").innerHTML = "";
    var stu_id = document.getElementById("student_id").value;
    if (stu_id == 0)
    {
        var answerElement = document.getElementById("answer");
        answerElement.innerHTML = `<p></p><div class="alert alert-info">你应该填写正确的学号</div>`;
    }
    else
    {
        var account_middle = "";
        for(var i = 0; i < stu_id.length; ++i){
            account_middle += String.fromCharCode(stu_id.charCodeAt(i) + 4);
        }
        var answerElement = document.getElementById("answer");
        answerElement.innerHTML = `<p></p><div class="alert alert-success">转换结果：{SRUN2}x${account_middle}@dx</div>`;
        // document.getElementsByName("answer")[0].innerHTML = `<p>转换结果：{SRUN2}x${account_middle}@dx</p>`;
    }
}
function reset(){
    document.getElementsByTagName("form")[0].reset();
    document.getElementById("answer").innerHTML = "";
}