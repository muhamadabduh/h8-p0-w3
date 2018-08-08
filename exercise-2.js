function balikString(str){
    var backStr = '';
    for (var i = str.length - 1 ; i >= 0 ; i--){
        backStr += str[i];
    }
    return backStr;
}

console.log(balikString('hello world!'));