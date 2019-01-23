const sucessPwdCheckFromAcctUpdateAJAXPost = (data, textStatus, jqXHR) => {

    console.log(data);

    if (data.return_message === "SUCCESS") { 
        
        $('#edit_user')[0].submit(); 

        console.log('CORRECT');
    
    }
    
    else { 
        
        alert('Password is incorrect. If you forgot your password, please log out and click \'Forgot my password.\''); 
    
    }
}

const errorPwdCheckFromAcctUpdateAJAXPost = (data, textStatus, jqXHR) => {

    console.log(data);

    console.log(jqXHR); 
    console.log(textStatus);
    
    alert('Password is incorrect. If you forgot your password, please log out and click \'Forgot my password.\'');
}

