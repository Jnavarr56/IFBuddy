//This function takes a file input event, an ID for a preview image tag, and the id for another image tag.
//It takes the file associated with the image input and sets it as the source for the priview image tag.
//It also hides the original image.  
const readURL = (inputEvent, previewImgID, originalImgID, clearUploadID) => {

    if (inputEvent.files && inputEvent.files[0]) {

      let reader = new FileReader();
  
      reader.onload = (e) => {

        $(previewImgID).attr('src', e.target.result);

        $(originalImgID).hide();

        $(clearUploadID).show();
        
      }

      reader.readAsDataURL(inputEvent.files[0]);

    }
}


