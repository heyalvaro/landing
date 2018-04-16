var element = document.querySelector('#test');
var words = ['web applications.','user interfaces.','landing pages.','coorporate websites.'];

function type(words, index){
    index = index ? index : 0;
    (function writer(i){
        var string = words[index];
        if(string.length <= i++){
            element.innerText = string;
            if(words[index] != words[words.length-1]) {
                setTimeout(function() {
                    reverseType(words, index);
                },500);
            }else{
                setTimeout(function() {
                    reverseType(words, index);
                },2000);
            }
            return;
        }
        element.innerText = string.substring(0,i);
        var rand = Math.floor(Math.random() * (100)) + 140;
        setTimeout(function(){writer(i);},rand);
    })(0)
}

function reverseType(words, index){
    index = index ? index : 0;
    (function writer(i){
        var string = words[index];
        if(string.length <= i++){
            element.innerText = string;
            if(words[index] != words[words.length-1]) {
                type(words, index+1);
            }else{
                type(words, 0);
            }
            return;
        }
        element.innerText = string.substring(0,string.length - i);
        var rand = Math.floor(Math.random() * (100)) + 140;
        setTimeout(function(){writer(i);},rand);
    })(0)
}

type(words);
