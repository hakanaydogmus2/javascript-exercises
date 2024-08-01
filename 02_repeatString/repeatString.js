const repeatString = function(word, repeatCount) {
    if(repeatCount <0){
        return "ERROR";
    }
    let temp = word;
    for(let i = 1; i<repeatCount; i++){
        word = word.concat(temp);
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
