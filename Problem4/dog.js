function check(){
    let inputs = document.getElementsByTagName('input');
    
    for(var i = 0; i<inputs.length; i++){
        if(inputs[i].value == ""){
            inputs[i].style.backgroundColor = "#FF0000";
        }else{
            inputs[i].style.backgroundColor = "#FFFFFF";
        }
    }
    let textArea = document.getElementsByTagName('textarea')[0];
        
    if (textArea.value.trim() == ""){
        textArea.style.backgroundColor = "#FF0000";
    }else{
        textArea.style.backgroundColor = "#FFFFFF";
    }
}
