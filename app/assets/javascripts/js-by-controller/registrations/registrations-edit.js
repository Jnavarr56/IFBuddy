document.addEventListener('turbolinks:load', function() {

    if (!fireJS('registrations', 'edit')) { return false; }

    // Enables profile picture uploading with preview.
    // See ./helpers/image-upload-preview.js
    enableProfilePicImageUploadWithPreview();

    $('#submit-update-button').click(function(e) {

        e.preventDefault();

        // Initial password change validations.------------------------------------------|
        if ($('#user_password').val()) {
            
            // Check if new password length is valid.
            if ($('#user_password').val().length < 6) { 
            
                $('#registration-form-error-modal').modal('show');

                $('#registration-form-error-modal-content').html(
    
                    '<p>New password must be at least 6 characters long.</p>'
    
                );

                return;

            }  

            // Check if new password matches confirmation.
            if ($('#user_password').val() !== $('#user_password_confirmation').val()) {

                $('#registration-form-error-modal').modal('show');

                $('#registration-form-error-modal-content').html(
    
                    '<p>Password confirmation does not match the new password you entered.</p>'
    
                );

                return;

            }

        }

        if($('#current-password-id').val().length === 0) {

            //alert('Password can not be blank.');

            $('#registration-form-error-modal').modal('show');

            $('#registration-form-error-modal-content').html(

                '<p>Current password cannot be blank!<br><br>Please enter it before confirming updates to your account</p>'

            );

            return;

        }


        $('#registration-confirmation-modal').modal('show');
            
        $('#confirm-registration-edit-button').click(function() {

            if ($('#registration-confirmation-modal').css('display') !== 'none') {

                // If password passes initial validation then lets do a precheck.
                let acctUpdatePwdPreCheckPostData = { account_update_password_precheck_params: { command: 'check_password_from_account_update', p: $('#current-password-id').val() } };

                standardAJAXPost('/account-update-password-precheck', acctUpdatePwdPreCheckPostData, sucessPwdCheckFromAcctUpdateAJAXPost, errorPwdCheckFromAcctUpdateAJAXPost)

            }

        });
        


    });

    $('#current-password-id').prop('required', true);

    $('#trigger-account-cancel').click(function(e) {

        e.preventDefault();

        $('#real-account-cancel').click();

    });

});
