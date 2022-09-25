/*
    email validation using regular exprression is not just one thing but must contain the fellowing bellow
    1 yourname ([a-z0-9\.-]+) @
    2 domain ([a-z0-9-]+)
    3 extension. ([a-z]{2,3}) - {2,3} mean min 0f 2 characters and max of 3 characters
    4 extention - optional

    \d match any digit (equal to [0-9])
    \w match any word character (a-z, A-Z, 0-9 $ .-)
*/ 
var text = document.getElementById("text").value;
let lbltext = document.getElementById("lbltext");
function validation(){
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})(.[a-z]{2,20})?$/;
    if(regx.test(text)){
        lbltext.innerHTML = "Valid";
        lbltext.style.color = "green";
        lbltext.style.visibility = "visible";
    } else{
        lbltext.innerHTML = "Invalid";
        lbltext.style.color = "red";
        lbltext.style.visibility = "visible";
    }

}