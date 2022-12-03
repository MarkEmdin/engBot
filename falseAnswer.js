
const falseAnswer = [
    "be",
    "have",
    "do",
    "get",
    "make",
    "take",
    "try",
    "know",
    "think",
    "feel",
    "see",
    "give",
    "bring",
    "cost",
    "break",
    "put",
    "eat",
    "sleep",
    "drink",
    "understand",
    "write",
    "read",
    "speak",
    "tell",
    "meet",
    "teach",
    "learn",
    "send",
    "dream"
]
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

module.exports = function answer(correct) {
    let result = "";
    let resultWords = []
    resultWords.push(correct);
    for (let i = 0; i<3; i++) {
        let index = Math.floor(Math.random() * falseAnswer.length);
        if(resultWords.includes(falseAnswer[index])){
            i = i-1
        } else{
            resultWords.push(falseAnswer[index])
        }
    }
    shuffle(resultWords);
    result = `a) ${resultWords[0]} b) ${resultWords[1]} c) ${resultWords[2]} d) ${resultWords[3]}`


    return result;
}