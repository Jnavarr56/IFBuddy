document.addEventListener('turbolinks:load', function() {

    if (!fireJS('sessions', 'new')) { return false; }
 
    if (pJSDom) {
        pJSDom = [];
    }
    
    particlesJS("particles-js", particleConfig);
    particlesJS("particles-js2", particleConfig2);


});