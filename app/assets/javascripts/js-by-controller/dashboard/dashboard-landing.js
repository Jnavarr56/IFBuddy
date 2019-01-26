document.addEventListener('turbolinks:load', function() {

    if (!fireJS('dashboard', 'landing')) { return false; }

    //Code for dashboard#landing view goes here.


    particlesJS("particles-js", particleConfig);
});