document.addEventListener('turbolinks:load', function() {

    if (!fireJS('dashboard', 'dash')) { return false; }

    //Code for dashboard#dash view goes here.


    //Function responsible for count down;
    if ($('#active-fast-schedule')) {

        displayTimeUntil('#active-fast-schedule');

    }

    //Send password reset instructions via post request from dashboard.
    if ($('#notification-password')) {

        $('#notification-password').click(function() {

            let sendPostData = {

                set_new_password_params: { command: 'set_new_password_from_social_sign_up' } 

            };

            $.ajax({
                type: 'POST', 
                contentType: 'application/json',
                url: '/set-new-password',
                data: JSON.stringify(sendPostData),
                dataType: 'json',
                success: function(data, textStatus, jqXHR){

                    if (data) { 

                        console.log(data); 

                        $('.flashing').remove();

                        $('body').prepend($('<div class="alert alert-info flashing">You have been sent instructions to reset your password.</div>'));

                    }
                    
                },
                error: function(jqXHR, textStatus, errorThrown){

                    console.log(jqXHR);
                    console.log(textStatus);
                    console.log(errorThrown);

                }
            });            

        });

    }

});