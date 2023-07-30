function start(button){
    var btnId = button.id;
    var n1 = btnId[0];
    var n2 = btnId[1];
    var sum = parseInt(n1)+parseInt(n2);
    var intId = parseInt(btnId);

    if (sum%2==0){
        even(intId,sum);
    } else {
        odd(intId,sum);
    }
    
}