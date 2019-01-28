
const standardAJAXDelete = (urlToPost, dataToPost, successFunction, errorFunction) => {

    $.ajax({
        type: 'DELETE', 
        contentType: 'application/json',
        url: urlToPost,
        data: JSON.stringify(dataToPost),
        dataType: 'json',
        success: successFunction,
        error: errorFunction
    });

}

       