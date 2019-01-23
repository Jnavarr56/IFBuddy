const sucessCheckInAJAXPost = (data, textStatus, jqXHR) => {

    if (data.return_message === "SUCCESS") { 
        
        location.reload();

    }
    
    else { 
        
        alert('Could not check in, please try again later.'); 
    
    }
}

const errorCheckInAJAXPost = (data, textStatus, jqXHR) => {

    console.log(jqXHR); 
    console.log(textStatus);
    
    alert('Could not check in, please try again later.'); 
}

