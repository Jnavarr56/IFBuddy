// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery3
//= require jquery_ujs
//= require popper
//= require bootstrap-sprockets
//= require turbolinks
//= require moment
// moment-timezone without timezone data
//= require moment-timezone
// moment-timezone with timezone data from 2012-2022
//= require moment-timezone-with-data-2012-2022
// moment-timezone all timezone data
//= require moment-timezone-with-data
//= require_tree ./data
//= require_tree ./helpers
//= require_tree ./AJAX-functions
//= require_tree ./js-by-controller/dashboard
//= require_tree ./js-by-controller/registrations
//= require_tree ./js-by-controller/fasts
//= require_tree ./js-by-controller/checks

var timer;


document.addEventListener('turbolinks:load', function() {
    

    setTimeout(() => {
        
        $('.alert').each(function() {

            if(!$(this).hasClass('bottom-alert')) {
                $(this).remove();
            }

        });
    
    }, 2500);

    

});



