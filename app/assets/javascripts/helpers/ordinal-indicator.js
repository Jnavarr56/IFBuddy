const getGetOrdinal = n => {
    const s=["th","st","nd","rd"],
        v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
}

document.addEventListener('turbolinks:load', function() {

    $('.needs-ordinal-indicator').each(function() {

        $(this).html(getGetOrdinal($(this).html()));

    });
    
});