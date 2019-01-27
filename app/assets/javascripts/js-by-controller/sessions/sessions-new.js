document.addEventListener('turbolinks:load', function() {

    if (!fireJS('sessions', 'new')) { return false; }

    particlesJS("particles-js", particleConfig);


});