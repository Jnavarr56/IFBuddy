document.addEventListener('turbolinks:load', function() {

    if (!fireJS('registrations', 'edit')) { return false; }

    
    //Hide clear upload button.
    $('#clear-upload-button').hide();
    //Toggel visbility of image preview/original image on click.
    $('#clear-upload-button').click(function(e) {

        e.preventDefault();

        $('#current-account-pic').show();

        $('#preview-pic').hide();

        $('#clear-upload-button').hide();

    });
    
    $("#user_uploaded_profile_pic").change(function() {

        readURL(this, '#preview-pic', '#current-account-pic', '#clear-upload-button');

    });


});