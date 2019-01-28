const sucessCheckNewPasswordAJAXPost = (data, textStatus, jqXHR) => {

    if (data.return_message === "SUCCESS") { 
        
        $('#real-sign-up-button').click();

    }

    else if (data.return_message === "FAIL DUE TO EMAIL") {

        $('#error-sign-up-modal').modal('hide');
    
        $('#error-sign-up-modal-content').html(
            '<p>It appears this email is invalid.</p>'
        );
    
        $('#error-sign-up-modal').modal('show');

    }

    else if (data.return_message === "FAIL DUE TO EMAIL TAKEN" ) {

        $('#error-sign-up-modal').modal('hide');
    
        $('#error-sign-up-modal-content').html(
            '<p>It appears this email is already associated with an account.<br><br>If you forgot your password head to the home page or log in page and click "Forgot your Password?".</p>'
        );
    
        $('#error-sign-up-modal').modal('show');

    }

    else { 


        $('#error-sign-up-modal').modal('hide');
    
        $('#error-sign-up-modal-content').html(
            'There was a problem signing you up. Please try again later.'
        );

        $('#error-sign-up-modal').modal('show');

    }


}

const errorCheckNewPasswordAJAXPost = (data, textStatus, jqXHR) => {

    $('#error-sign-up-modal').modal('hide');
    
    $('#error-sign-up-modal-content').html(
        'There was a problem signing you up. Please try again later.'
    );

    $('#error-sign-up-modal').modal('show');

}

