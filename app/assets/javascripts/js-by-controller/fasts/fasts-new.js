document.addEventListener('turbolinks:load', function() {

    if (!fireJS('fasts', 'new')) { return false; }

    // Code for fasts#new view goes here------------------------------------------|


    // 1) Set today as minimum input for calendar input field.
    setCalendarDateMin('fast_start_date');
    
    // 2) Set current time as minimum input for time input field.
    setTimeVal('fast_start_time');

    //*** HAVE A CHECK BOX FOR USING CURRENT TIME. IF CHECKED, THEN KEEP CALCULATING CURRENT TIME INTO 
    // FIELD WITH SETINTERVAL.
    // IF NOT CHECKED THEN USER CAN SET TIME.

    //3)
});