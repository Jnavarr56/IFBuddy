//Returns true if on the view of the controller#action. 
const fireJS = (controller, action) => {

    clearInterval(timer);

    return $('body').hasClass(controller) && $('body').hasClass(action) ? true : false;
    
}



