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
            
                alert('Password must be at least 6 characters.');

                return;

            }  

            // Check if new password matches confirmation.
            if ($('#user_password').val() !== $('#user_password_confirmation').val()) {
            
                alert('Password confirmation must mactch the new password you entered.');

                return;

            }

        }

        if($('#user_current_password').val().length === 0) {

            alert('Password can not be blank.');

            return;

        }

        // If password passes initial validation then lets do a precheck.
        if(confirm('Are you sure you want to make these changes?')) {

            let acctUpdatePwdPreCheckPostData = { account_update_password_precheck_params: { command: 'check_password_from_account_update', p: $('#user_current_password').val() } };

            standardAJAXPost('/account-update-password-precheck', acctUpdatePwdPreCheckPostData, sucessPwdCheckFromAcctUpdateAJAXPost, errorPwdCheckFromAcctUpdateAJAXPost)

        }

    });


});