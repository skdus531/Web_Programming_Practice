const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function shuffle(array) {
    var curIdx = array.length, temp, randIdx;
  
    while (0 !== curIdx) {
      randIdx = Math.floor(Math.random() * curIdx);
      curIdx -= 1;
  
      temp = array[curIdx];
      array[curIdx] = array[randIdx];
      array[randIdx] = temp;
    }  
    return array;
}

function func_alert(){
    let txt = document.getElementById("plain_text");
    let option = document.getElementById("type");
    let answer = document.getElementById("output");

    alert('Hello, World!');
    var value = txt.value;
    
    if(option.selectedIndex == 1) 
        answer.innerHTML = randomized(value);
    else 
        answer.innerHTML = encrypt(value);    
}

function randomized(val){
    let index = new Array(26);
    for(var i = 0; i<26; i++){
        index[i] = i;
    }
    shuffle(index);
    
    var ans = ''
    for(var i = 0; i<val.length; i++){
        var pos = alphabet.indexOf(val.charAt(i));
        ans = ans + alphabet[index[pos]];
    }
    return ans;
}
  
function encrypt(val){
    let option_num = document.getElementById("val");
    let num = option_num.selectedIndex;
    var ans = '';

    for(var i = 0; i<val.length; i++){
        var pos = alphabet.indexOf(val.charAt(i));
        var idx = (pos - num +25)%25;
        ans = ans + alphabet[idx];
    }
    return ans;
}

window.onload = function(){
    document.getElementsByTagName('button')[0].onclick = func_alert;
}