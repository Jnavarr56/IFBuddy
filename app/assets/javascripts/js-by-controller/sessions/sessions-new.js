document.addEventListener('turbolinks:load', function() {

    if (!fireJS('sessions', 'new')) { return false; }
 
    if (pJSDom) {
        pJSDom = [];
    }
    
    particlesJS("particles-js", particleConfig);
    particlesJS("particles-js2", particleConfig2);


    $('#log-in-trigger').click(function(e) {

        e.preventDefault();

        if ($('#login-email').val().length <= 0 || $('#login-password').val().length <= 0) {

            $('.form-control').addClass('shake');

            setTimeout(()=>  $('.form-control').removeClass('shake'), 850);

            return;
        }

        let checkLoginPasswordData = { check_password_login_params: { command: 'check_password_login_params', email:  $('#login-email').val(), password: $('#login-password').val() } };        

        standardAJAXPost('/check-password-login', checkLoginPasswordData, successCheckLoginPasswordAJAXPost, errorCheckLoginPasswordAJAXPost);


    });


});