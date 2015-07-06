document.querySelector("#submit").addEventListener("click", function(evt) {
    window.scroll(0, 0);
    if (document.getElementById("class_id").value === "" ||
        document.getElementById("stu_id").value === "" ||
        document.getElementById("stu_name").value === "") {
        alert("请检查班级、学号、姓名是否正确填写！");
        evt.preventDefault();
        return;
    }

    var form = new FormValueGetter();
    form.get_value();

    var score = 0;
    form.form_value.forEach(function(item) {
        score += item.score;
    });

    document.getElementById("score").value = score;
});

document.getElementById('choose_question').addEventListener('click', function(evt) {
    if (evt.target.name === undefined) {
        return;
    }

    var str = "";
    [].forEach.call(document.getElementsByName(evt.target.name), function(item, i) {
        if (item.checked) {
            str += item.value;
        }
    });
    document.getElementById("ques" + evt.target.name).value = str;
});
