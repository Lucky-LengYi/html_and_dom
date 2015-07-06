function Answer(name, value) {
    this.name = name;
    this.value = value;
    this.score = get_score(name, value);
}

function exist(item, collection) {
    var result = false;
    collection.forEach(function(element) {
        if (item === element) {
            result = true;
        }
    });
    return result;
}

find_question_by_name = function(name) {
    var all_question = load_all_question();
    var result;
    all_question.forEach(function(item, i) {
        if (item.name === name) {
            result = item;
        }
    });
    return result;
};

get_score = function(name, value) {
    var score = 0;
    var question = find_question_by_name(name);
    if (question === undefined) {
        return score;
    }
    var result = [];
    value.forEach(function(item) {
        if (!exist(item, result)) {
            result.push(item);
        }
    });
    result.forEach(function(item) {
        question.answer.forEach(function(element) {
            if (item === element) {
                score += question.score;
            }
        });
    });
    return score;
};
