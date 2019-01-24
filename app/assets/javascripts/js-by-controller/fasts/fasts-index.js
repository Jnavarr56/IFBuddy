document.addEventListener('turbolinks:load', function() {

    if (!fireJS('fasts', 'index')) { return false; }

    // Convert header for fast history bootstrap cards into one that will display in users time.
    $('.fast-time-points').each(function() {

        $(this).html(formatDateUserTime($(this).html(), 'MMM Do YYYY h:mm a'));

    });

    //console.log();
});