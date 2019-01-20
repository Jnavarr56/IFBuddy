document.addEventListener('turbolinks:load', function() {

    if (!fireJS('dashboard', 'dash')) { return false; }

    //Code for dashboard#dash view goes here.


    //Function responsible for count down;
    if ($('#active-fast-schedule')) {

        console.log($('#active-fast-schedule').attr('data-future-date'));

        displayTimeUntil('#active-fast-schedule');

    }

    if ($('#notification-password')) {


        $('#notification-password').click(function() {

            $.ajax({
                type: "POST", 
                url: "/things",
                data: { command: 'titbean' },
                success: function(data, textStatus, jqXHR){},
                error: function(jqXHR, textStatus, errorThrown){}
            });

        });

    }




});