const displayTimeUntil = (displayID) => {

    let futureDate = new Date($(displayID).attr('data-future-date'));

    let $circle = $('#svg #bar');
  
    timer = setInterval(() => {

        let countCircle = $(`<div class='${$('#active-fast-schedule').attr('data-action') === 'Fasting' ? 'red' : 'green'}-count-circle-flash'><div class='${$('#active-fast-schedule').attr('data-action') === 'Fasting' ? 'red' : 'green'}-count-circle-flash-2'><div class='${$('#active-fast-schedule').attr('data-action') === 'Fasting' ? 'red' : 'green'}-count-circle-flash-3'><div class='${$('#active-fast-schedule').attr('data-action') === 'Fasting' ? 'red' : 'green'}-count-circle-flash-4'></div></div></div></div>`);
        
        let milli = futureDate - (new Date());
  
        let hours = Math.floor(milli/(1000 * 60 * 60));
  
        let minutes = Math.floor((milli/(1000 * 60 * 60) - hours) * 60);
  
        let seconds = (((milli/(1000 * 60 * 60) - hours) * 60) - minutes) * 60;

        let actionText = $(displayID).attr('data-action') == "Fasting" ? "You may eat in" : "You have"

        let countdownStats = `${actionText} ${hours} hrs, ${minutes} mins, ${Math.floor(seconds)} secs`;

        let val = parseFloat(((milli/(parseFloat($('#cont').attr('data-curr-window-length'))*1000*60*60)))*100);

        let r = $circle.attr('r');
        let c = Math.PI*(r*2);
       
        if (val < 0) { val = 0;}
        if (val > 100) { val = 100;}
        
        let pct = ((100-val)/100)*c;
        
        $circle.css({ strokeDashoffset: pct});
        
        $('#cont').attr('data-pct', countdownStats);
        
        $('#cont').append(countCircle);

        setTimeout(()=> countCircle.remove(), 1010);

        if (milli <= 500) {

            clearInterval(timer);

            setTimeout(()=> location.reload(), 500);
        }
  
    }, 1000);
    
}

  
  
  
  
  
  
  
  