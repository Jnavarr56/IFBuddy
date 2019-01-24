const sucessSetNewPWDFromDashAJAXPost = (data, textStatus, jqXHR) => {

    if (data.return_message === 'SUCCESS') { 

        console.log(data); 

        $('.flashing').remove();

        $('body').prepend($('<div class="alert alert-info flashing">You have been sent instructions to reset your password.</div>'));

    }

    else {

        //alert('Could not send password reset instructions, please try again later.');

        $('.modal').hide(); 

        $('#global-error-modal-content').html(
            
            '<p>Could not send password reset instructions, please try again later.</p>'
        );

        $('#global-error-modal-title').html(

            'Sorry,  Techical Issues!'
        );

        $('#global-error-modal').modal('show');
        
    }
}

const errorSetNewPWDFromDashAJAXPost = (data, textStatus, jqXHR) => {

    console.log(jqXHR); 
    console.log(textStatus);
    
    //alert('Could not send password reset instructions, please try again later.');

    $('.modal').hide(); 

    $('#global-error-modal-content').html(
            
        '<p>Could not send password reset instructions, please try again later.</p>'
    );

    $('#global-error-modal-title').html(

        'Sorry,  Techical Issues!'
    );

    $('#global-error-modal').modal('show');

}

