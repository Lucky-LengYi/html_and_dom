function FormValueGetter() {
    this.form_value = [];
}

FormValueGetter.prototype.get_value = function() {
    var form = [];

    [].forEach.call(document.querySelector("form"), function(item, i) {
        if (item.name.indexOf("question") != -1) {
            form.push(item);
        }
    });

    var result = {};

    form.forEach(function(item, i) {
        result[item.name] = result[item.name] || [];
        result[item.name].push(item.value);
    });

    for (var key in result) {
        var answer = new Answer(key, result[key]);
        this.form_value.push(answer);
    }
};
