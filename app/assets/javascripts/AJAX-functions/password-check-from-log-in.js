const  successCheckLoginPasswordAJAXPost = (data, textStatus, jqXHR) => {

    console.log(data);

    if (data.return_message === "SUCCESS") { 
        
        $('#real-log-in-trigger').click();
    }

    else if (data.return_message === "WARN") { 
        
        $('#global-error-modal').modal('show');

        $('#global-error-modal-title').html(`

            <h1>Attention</h1>
        
        `);

        $('#global-error-modal-content').html(`
            <p>
                It looks like you signed up with ${data.provider === "facebook" ? "Facebook" : "Google"} and never set a custom password.
                <br>
                <br>
                You'll have to sign in with either Facebook or Google. If you want to set a password 
                you can do that by going to your account settings when you log in or by clicking "Forgot your password?".
            </p>
        `);

    }

    else { 

        $('.form-control').addClass('shake');

        setTimeout(()=>  $('.form-control').removeClass('shake'), 850);

        return;

    }


}

const errorCheckLoginPasswordAJAXPost = (data, textStatus, jqXHR) => {

    $('.form-control').addClass('shake');

    setTimeout(()=>  $('.form-control').removeClass('shake'), 850);

    return;

}

