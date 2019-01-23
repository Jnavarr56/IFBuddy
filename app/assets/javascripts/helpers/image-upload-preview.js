//This function takes a file input event, an ID for a preview image tag, and the id for another image tag.
//It takes the file associated with the image input and sets it as the source for the priview image tag.
//It also hides the original image.  
const readURL = (inputEvent, previewImgID, originalImgID, clearUploadID) => {

    if (inputEvent.files && inputEvent.files[0]) {

      let reader = new FileReader();
  
      reader.onload = (e) => {

        $(previewImgID).attr('src', e.target.result);

        $(previewImgID).show();

        $(originalImgID).hide();

        $(clearUploadID).show();

      }

      reader.readAsDataURL(inputEvent.files[0]);

    }
}


const enableProfilePicImageUploadWithPreview = () => {

  // A.1) Hide clear upload button so that we don't see it until later.
  $('#clear-upload-button').hide();

  // A.2) Upon clicking the clear upload button:
  $('#clear-upload-button').click(function(e) {

      // A.2.1) Prevent default to avoid triggering form submit.
      e.preventDefault();

      // A.2.2) Show the original profile image since we are reverting back to it.
      $('#current-account-pic').show();

      // A.2.2) Hide the preview of the uploaded profile image since we have nothing to preview now.
      $('#preview-pic').hide();

      // A.2.3) Hide the clear upload button again because we do not need it since
      // we are clearing what was uploaded before.
      $(this).hide();

      // A.2.4) Lastly, we can actually clear the input file from the input element.
      $("#user_uploaded_profile_pic").val('');

  });

  let lastUpload; // *B This variable will hold a clone of the input element. We set this at the end of every file input.

  // B) On uploading files to the upload profile pic element we want to make sure we sanitize the user's input.
  $("#user_uploaded_profile_pic").change(function() {

      // B.1) If lastUpload is a clone of the file input element AND the file upload is empty (user did not select a file):
      if (lastUpload && !this.files[0]) {            

          console.log('hi');
          // B.1.1) Let's replace the existing file input element with its clone so that our file input element is not
          // made blank from the empty input (allows us to keep the last upload).
          $(this).replaceWith(lastUpload);

          return;

      }

      // B.2) If the file is not an image:
      if (this.files[0].type.split('/')[0] !== 'image') {

          // B.2.1) Alert the user with a modal
          $('#registration-form-error-modal').modal('show');

          $('#registration-form-error-modal-content').html(

              '<p>Profile picture must be an image file.</p>'

          );

          // B.2.1) Clear the file input to erase the non image file.
          $(this).val('');

          return;
    
      }

      // If the file has passed our test we can go head and show our previewed image.
      readURL(this, '#preview-pic', '#current-account-pic', '#clear-upload-button');

      lastUpload = $(this).clone(true); // *B

  });

}