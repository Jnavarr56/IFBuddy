document.addEventListener('turbolinks:load', function() {

    if (!fireJS('dashboard', 'landing')) { return false; }

    //Code for dashboard#landing view goes here.

    if (pJSDom) {
        pJSDom = [];
    }

    particlesJS("particles-js", particleConfig);
    particlesJS("particles-js2", particleConfig2);

});