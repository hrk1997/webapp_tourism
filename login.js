let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

function validate() {
    if (email.value.trim =="" ||pwd.value.trim =="") 
    {
        alert("feild is empty");
        return false;
    } else if(pwd.value.length<=5){
        alert("password strong poor");
    }else if(pwd.value.length<=8){
        alert("password strong medium");
    }else if(pwd.value.length<=10){
        alert("password is strong ")
    }
    else {
        return true;
    }
}


