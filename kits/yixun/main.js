function transform(){
    var stu_id = document.getElementsByName("student_id")[0].value;
    var account_middle = "";
    for(var i = 0; i < stu_id.length; ++i){
        account_middle += String.fromCharCode(stu_id.charCodeAt(i) + 4);
    }
    document.getElementsByName("answer")[0].innerHTML = `<p>转换结果：{SRUN2}x${account_middle}@dx</p>`;
}