var timer;


const displayTimeUntil = (displayID) => {

    let futureDate = new Date($(displayID).attr('data-future-date'));

    let $circle = $('#svg #bar');
  
    timer = setInterval(() => {
        
        let milli = futureDate - (new Date());
  
        let hours = Math.floor(milli/(1000 * 60 * 60));
  
        let minutes = Math.floor((milli/(1000 * 60 * 60) - hours) * 60);
  
        let seconds = (((milli/(1000 * 60 * 60) - hours) * 60) - minutes) * 60;

        let actionText = $(displayID).attr('data-action') == "Fasting" ? "You may eat in" : "You have"

        let countdownStats = `${actionText} ${hours} hrs, ${minutes} mins, ${Math.floor(seconds)} secs`;

        //$(displayID).text(actionText + ' ' + countdownStats);

        console.log($('#cont').attr('data-curr-window-length'));

        let val = parseFloat(((milli/(parseFloat($('#cont').attr('data-curr-window-length'))*1000*60*60)))*100);

        console.log(val);

        let r = $circle.attr('r');
        let c = Math.PI*(r*2);
       
        if (val < 0) { val = 0;}
        if (val > 100) { val = 100;}
        
        let pct = ((100-val)/100)*c;
        
        $circle.css({ strokeDashoffset: pct});

        console.log(pct);
        
        $('#cont').attr('data-pct', countdownStats);

        if (milli <= 500) {

            clearInterval(timer);

            setTimeout(()=> location.reload(), 500);
        }
  
    }, 1000);
    
}

  
  
  
  
  
  
  
  