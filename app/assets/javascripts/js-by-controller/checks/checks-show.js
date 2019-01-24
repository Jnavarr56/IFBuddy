document.addEventListener('turbolinks:load', function() {

    if (!fireJS('checks', 'show')) { return false; }

    $('.check-time-points').each(function() {

        $(this).html(formatDateUserTime($(this).html(), 'MMM Do YYYY h:mm a'));
        
    });
    

    $('.view-notes-button').each(function() {

        $(this).click(function(e) {

            e.preventDefault();

            $('#checkNoteContent').html($(this).attr('data-notes'));

            $('#checkNote').modal('show');

        });

    });


});