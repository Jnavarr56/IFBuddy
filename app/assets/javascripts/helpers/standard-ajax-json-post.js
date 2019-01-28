
const standardAJAXPost = (urlToPost, dataToPost, successFunction, errorFunction) => {

    $.ajax({
        type: 'POST', 
        contentType: 'application/json',
        url: urlToPost,
        data: JSON.stringify(dataToPost),
        dataType: 'json',
        success: successFunction,
        error: errorFunction
    });

}

       