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

        $('#end-current-fast-confirmation-modal').modal('show');

        $('#confirm-end-current-fast-button').click(function() {

            let endFastPostData = { end_current_fast_params: { command: 'end-current-fast' } };

            //Send post request to /end-current-fast and send endFastPostData. See end-fast-ajax-functions.js
            standardAJAXPost('/end-current-fast', endFastPostData, sucessEndFastAJAXPost, errorEndFastAJAXPost); 

        });

    });

    $('#check-in-button').click(function(e) {

        e.preventDefault();

        let checkInPostData = { check_in_today_params: { command: 'check-in-today', check_in_today_notes: 'testing notes', fast_id: $(this).attr('data-fast-id') } };

        //Send post request to /end-current-fast and send endFastPostData. See end-fast-ajax-functions.js
        standardAJAXPost('/check-in-today', checkInPostData, sucessCheckInAJAXPost, errorCheckInAJAXPost); 

    });

    if ($("#start-new-fast-link").length && $('#end-fast-post-link').length) {

        $("#start-new-fast-link").click(function(e) {

            e.preventDefault();

            $('#confirm-end-fast-before-new-modal').modal('show');

            let newFastLinkURL = $(this).attr('href');

            $('#confirm-end-fast-before-new-button').click(() => window.location.href = newFastLinkURL);

        });

    }   

    


});