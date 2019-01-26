document.addEventListener('turbolinks:load', function() {

    if (!fireJS('fasts', 'index')) { return false; }

    // Convert header for fast history bootstrap cards into one that will display in users time.
    $('.fast-time-points').each(function() {

        $(this).html(formatDateUserTime($(this).html(), 'MMM Do YYYY h:mm a'));

    });

    $('.delete-fast-card-button').each(function() {

        $(this).click(function(e) {

            e.preventDefault();

            console.log('tit');

            $('#confirm-delete-fast-button').attr('data-delete-fast-id', $(this).attr('data-delete-fast-id'));

            $('#confirm-delete-fast-button').click(function() {

                let delete_fast_record_params = { delete_fast_record_params: { command: `delete_fast_record_params-${$(this).attr('data-delete-fast-id')}` } };

                //Put a standard Post request for deletion of fast record
                standardAJAXDelete(`/fasts/${$(this).attr('data-delete-fast-id')}`, delete_fast_record_params, sucessDeleteFastRecordAJAXPost, errorDeleteFastRecordAJAXPost);

            });

            $('#confirmDeleteFastFromCardModal').modal('show');

        });

    });

    //console.log();
});