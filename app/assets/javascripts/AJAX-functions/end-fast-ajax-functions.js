const sucessEndFastAJAXPost = (data, textStatus, jqXHR) => {

    if (data.return_message === "SUCCESS") { 
        
        location.reload();
    
    }
    
    else { 
        
        //alert('Could not delete fast again, please try again later.'); 

        $('.modal').hide(); 

        $('#global-error-modal-content').html(
            
            '<p>Could not end your current fast, please try again later.</p>'
        );

        $('#global-error-modal-title').html(

            'Sorry, Technical Issues!'
        );

        $('#global-error-modal').modal('show');
    
    }
}

const errorEndFastAJAXPost = (data, textStatus, jqXHR) => {

    console.log(jqXHR); 
    console.log(textStatus);
    
    //alert('Could not delete fast again, please try again later.');

    $('.modal').hide(); 

    $('#global-error-modal-content').html(
            
        '<p>Could not end your current fast, please try again later.</p>'
    );

    $('#global-error-modal-title').html(

        'Sorry, Technical Issues!'
    );

    $('#global-error-modal').modal('show');
}

