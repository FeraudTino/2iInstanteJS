

function execute(){
    var contenue = document.getElementById('code');
    var result = document.getElementById('result');
    result.innerHTML = contenue.value;
}

function executeJS(){
    var contenueJS = document.getElementById('codeJS');
    eval(contenueJS.value);
}