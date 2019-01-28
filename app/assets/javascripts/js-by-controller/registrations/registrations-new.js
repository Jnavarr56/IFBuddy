document.addEventListener('turbolinks:load', function() {

    if (!fireJS('registrations', 'new')) { return false; }
 
    if (pJSDom) {
        pJSDom = [];
    }
    
    particlesJS("particles-js", particleConfig);
    particlesJS("particles-js2", particleConfig2);


    $('#sign-up-button-trigger').click(function(e) {

        e.preventDefault();
        
        console.log('hi');

        for(let x = 0; x < $('.required-for-sign-up').length; x++) {

            if ($('.required-for-sign-up').eq(x).val().length === 0)  {

                $('#error-sign-up-modal-content').html(
                    '<p>You must fill out the Email, Password, and Password confirmation field.</p>'
                );

                $('#error-sign-up-modal').modal('show');

                return;
            }

        }

        if ($('.required-for-sign-up').eq(1).val() !== $('.required-for-sign-up').eq(2).val()) {

            $('#error-sign-up-modal-content').html(
                '<p>Your new password does not match the confirmation you entered.</p>'
            );

            $('#error-sign-up-modal').modal('show');

            return;
        }

        if ($('.required-for-sign-up').eq(1).val().length < 6 || $('.required-for-sign-up').eq(2).val().length < 6) {

            $('#error-sign-up-modal-content').html(
                '<p>Your password must be at least 6 characters long.</p>'
            );

            $('#error-sign-up-modal').modal('show');

            return;
        }

        console.log('hi');

        let checkNewPasswordPostData = { check_password_sign_up_params: { command: 'check_password_sign_up_from_social_sign_up', email:  $('.required-for-sign-up').eq(0).val() } };        

        standardAJAXPost('/check-password-sign-up', checkNewPasswordPostData, sucessCheckNewPasswordAJAXPost, sucessCheckNewPasswordAJAXPost);

    });

    
});