document.addEventListener('turbolinks:load', function() {

    if (!fireJS('dashboard', 'dash')) { return false; }

    //Code for dashboard#dash view goes here.


    // 1) Function responsible for count down-----------------------------------------------|
    if ($('#active-fast-schedule')) {

        displayTimeUntil('#active-fast-schedule');

    }
    
    // 2) Send password reset instructions via post request from dashboard.-----------------|
    if ($('#notification-password')) {

        $('#notification-password').click(function() {

            let newPasswordPostData = { set_new_password_params: { command: 'set_new_password_from_social_sign_up' } };        
            //Send post request to /end-current-fast and send endFastPostData. See end-fast-ajax-functions.js
            standardAJAXPost('/set-new-password', newPasswordPostData, sucessSetNewPWDFromDashAJAXPost, errorSetNewPWDFromDashAJAXPost);

        });

    }

    // 3) Break fast via post request from dashboard.---------------------------------------|
    $('#end-fast-post-link').click(function(e) {

        e.preventDefault();

        if (confirm('Are you sure you want to end your current fast?')) {

            let endFastPostData = { end_current_fast_params: { command: 'end-current-fast' } };

            //Send post request to /end-current-fast and send endFastPostData. See end-fast-ajax-functions.js
            standardAJAXPost('/end-current-fast', endFastPostData, sucessEndFastAJAXPost, errorEndFastAJAXPost); 

        }

    });


});