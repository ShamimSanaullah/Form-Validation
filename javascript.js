const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener('submit',(e) => {
    e.preventDefault();
    validate();
}) ;

//define the validate function
const validate = () =>{
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const phoneval = phone.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

     
    //checking email
    const isEmail = (emailval) =>{
        var atSymbol = emailval.indexOf("@");
        if(atSymbol < 1) return false;
        var dot = emailval.lastIndexOf('.');
        if(dot <= atSymbol + 2) return false;
        if(dot === emailval.length - 1) return false;
        return true;
        
    }

    //validate username
    if(usernameval === ""){
        setErrorMsg(username, 'username cannot be blank')
    }
    else if(usernameval.length <= 2){
        setErrorMsg(username,'username min 3 char')
    }
    else{
        setSuccessMsg(username);
    }


    //validate email
    if(emailval === ""){
        setErrorMsg(email, 'username cannot be blank')
    }
    else if(!isEmail(emailval)){
        setErrorMsg(emailval,'Not a valid email')
    }
    else{
        setSuccessMsg(email);
    }
}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className += "form-control error";
    small.innerText = errormsgs;
}

