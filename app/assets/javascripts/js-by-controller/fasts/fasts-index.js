var searchFastFilterClass;

const download_csv = () => {

    let data = [];

    $('.card').each(function() {

        if ($(this).css('display') === 'none') { return; }

        let row = [];

        row.push(parseInt($(this).find($('.needs-ordinal-indicator')).text().trim()));

        row.push(($(this).find($('.start-date-search')).text()).trim());

        row.push(($(this).find($('.end-date-search')).text()).trim());

        row.push($(this).find($('.eating-window-search')).text().trim().split(' ')[2] );

        row.push( $(this).find($('.fasting-window-search')).text().trim().split(' ')[2]  );

        row.push( $(this).find($('.total-days-checked-in-search')).text().trim().split(' ')[4]  );

        row.push( $(this).find($('.total-days-in-fast-search')).text().trim().split(' ')[4]  );

        data.push(row);

    });

    console.log(data);

    let csv = 'Fast_Attempted,Start_Date,End_Date,Eating_Window,Fasting_Window,Total_Days_Checked_In,Total_Days_In Fast\n';

    data.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });

    console.log(data);
 
    
    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'your_fast_data.csv';
    hiddenElement.click();
}

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

    $('.fast-search-drop-down').each(function() {

        $(this).click(function(e) {

            e.preventDefault(e);

            $('.fast-search-drop-down').removeClass('active');

            $(this).addClass('active');

            searchFastFilterClass = $(this).attr('data-search-class');

            $('#options-search-fast-button').text($(this).text());

            $('#options-search-fast-button-mobile').text($(this).text());

        });

    });

    $('#default-drop-down-search').click();

    $('#default-drop-down-search-mobile').click();

    $('#search-fast-record-input').on('input',function() {
        
        let searchVal = $(this).val().toLowerCase();

        console.log(searchVal);

        $(`.${searchFastFilterClass}`).each(function() {
  
            if($(this).text().toLowerCase().match(searchVal)) {

                $(this).closest('.card').show();

            }
            else {
                $(this).closest('.card').hide();
            }
             
        });
    });




    $('#download-csv-button').click(function() {

        download_csv();


    });

    $('#download-csv-button-mobile').click(function() {

        download_csv();


    });

});