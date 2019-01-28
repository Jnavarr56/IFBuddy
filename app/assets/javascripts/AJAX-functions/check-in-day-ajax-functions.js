const sucessCheckInAJAXPost = (data, textStatus, jqXHR) => {

    if (data.return_message === "SUCCESS") { 
        
        location.reload();

    }
    
    else { 
        
        //alert('Could not check in, please try again later.'); 

        $('.modal').hide(); 

        $('#global-error-modal-content').html(
            
            '<p>Could not check in, please try again later.</p>'
        );

        $('#global-error-modal-title').html(

            'Sorry, Technical Issues!'
        );

        $('#global-error-modal').modal('show');

    }
}

const errorCheckInAJAXPost = (data, textStatus, jqXHR) => {

    console.log(jqXHR); 
    console.log(textStatus);
    
    //alert('Could not check in, please try again later.'); 

    $('.modal').hide(); 

    $('#global-error-modal-content').html(
            
        '<p>Could not check in, please try again later.</p>'
    );

    $('#global-error-modal-title').html(

        'Sorry, Technical Issues!'
    );

    $('#global-error-modal').modal('show');

}

