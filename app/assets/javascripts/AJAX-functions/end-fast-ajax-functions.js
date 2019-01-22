const sucessEndFastAJAXPost = (data, textStatus, jqXHR) => {

    if (data.return_message === "SUCCESS") { 
        
        location.reload();
    
    }
    
    else { 
        
        alert('Could not delete fast again, please try again later.'); 
    
    }
}

const errorEndFastAJAXPost = (data, textStatus, jqXHR) => {

    console.log(jqXHR); 
    console.log(textStatus);
    
    alert('Could not delete fast again, please try again later.');
}

