const sucessDeleteFastRecordAJAXPost = (data, textStatus, jqXHR) => {

    if (data.return_message === "SUCCESS") { 
        
        location.reload();

    }
    
    else {
        
        $('.modal').modal('hide'); 

        setTimeout(()=> {

            $('#deleteFastFromCardErrorModal').modal('show'); 

        }, 1500);
        
        

    }
}

const errorDeleteFastRecordAJAXPost = (data, textStatus, jqXHR) => {

    console.log(jqXHR); 
    console.log(textStatus);

    $('.modal').modal('hide'); 

    setTimeout(()=> {

        $('#deleteFastFromCardErrorModal').modal('show'); 

    }, 1500);

}

