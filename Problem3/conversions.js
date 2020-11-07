function kg2lb(kg){
    return kg*2.20462262;
}

function lb2kg(lb){
    return lb*0.45359237;
}

function change(){
    let option = document.getElementById("convert");
    let ans = document.getElementById("answer");
    let val = document.getElementById("val");
    
    if (option.options[option.selectedIndex].value == "kgtopounds"){
        ans.innerHTML = kg2lb(val.value);
    }
    else{
        ans.innerHTML = lb2kg(val.value);
    }
}