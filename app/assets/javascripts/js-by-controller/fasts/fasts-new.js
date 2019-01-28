document.addEventListener('turbolinks:load', function() {

    if (!fireJS('fasts', 'new')) { return false; }

    // Code for fasts#new view goes here------------------------------------------|


    // 1) Set today as minimum input for calendar input field.
    setCalendarDateMin('fast_start_date');
    
    // 2) Set current time as minimum input for time input field.
    setTimeVal('fast_start_time');


    // 2.1) Constantly update current time.
    let cycleCurrentTimeOnLoad = setInterval(()=> {

        setTimeVal('fast_start_time');

    }, 1000);

    let cycleCurrentTimeCustom;

    // 2.2) If checkbox toggling use current time is checked, constantly update time again.
    // Otherwise, do not.
    $('#use-current-time').change(function() {

        clearInterval(cycleCurrentTimeOnLoad);

        if($(this).prop('checked')) {

            $('#fast_start_time').attr('disabled', true);

            setTimeVal('fast_start_time');

            cycleCurrentTimeCustom = setInterval(()=> {

                setTimeVal('fast_start_time');
        
            }, 1000);

        }

        else {

            $('#fast_start_time').removeAttr('disabled');

            clearInterval(cycleCurrentTimeCustom);

        }

    });

    // 3) Create 2 buttons to toggle the start with fast checkbox.
    // Otherwise, do not.
    $('.fast-or-eat').click(function(e) {

        e.preventDefault();

        let otherBtnID = $(this).attr('id') === 'fast-start-button' ? 'eat-start-button' : 'fast-start-button';

        $(`#${otherBtnID}`).removeClass('btn-info');

        $(`#${otherBtnID}`).addClass('btn-secondary');

        $(this).removeClass('btn-secondary');

        $(this).addClass('btn-info');

        $('#fast_start_with_fast').prop('checked', otherBtnID === 'fast-start-button' ? false : true);

        $('#fast_start_with_fast').val(otherBtnID === 'fast-start-button' ? 0 : 1);

        console.log($('#fast_start_with_fast').prop('checked'));
    });

    $('#fast-start-button').click();


    // 4) Fill in the other window length field based on an input in the other.
    $('.window-length').on('input', function(e) {

        if($(this).val() < 0) {

            $(this).val(1);
        }

        // Round up or down
        $(this).val($(this).val() - Math.floor($(this).val()) >= .5 ? Math.ceil($(this).val()) : Math.floor($(this).val()));

        $(`#${$(this).attr('id') === 'fasting-window-input-js' ? 'eating-window-input-js' : 'fasting-window-input-js'}`).val(

            24 - $(this).val()
        );
    
    });

    




});