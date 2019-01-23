document.addEventListener('turbolinks:load', function() {

    if (!fireJS('fasts', 'index')) { return false; }

    $('.fast-time-points').each(function() {

        //$(this).html(moment($(this).html()).tz(moment.tz.guess()).format('MMMM Do YYYY h:mm:ss a'));

        $(this).html(formatDateUserTime($(this).html(), 'MMM Do YYYY h:mm a'));

    });

    
    //console.log();
});