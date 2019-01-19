const displayTimeUntil = (displayID) => {

    let futureDate = new Date($(displayID).attr('data-future-date'));
  
    setInterval(() => {
        
        let milli = futureDate - (new Date());
  
        let hours = Math.floor(milli/(1000 * 60 * 60));
  
        let minutes = Math.floor((milli/(1000 * 60 * 60) - hours) * 60);
  
        let seconds = (((milli/(1000 * 60 * 60) - hours) * 60) - minutes) * 60;

        let countdownStats = `${hours} hours, ${minutes} minutes, ${Math.floor(seconds)} seconds`;

        let actionText = $(displayID).attr('data-action') == "Fasting" ? "You're fasting. You may eat in" : "You're eating. You have"

        $(displayID).text(actionText + ' ' + countdownStats);
  
    }, 1000);
    
}

  
  
  
  
  
  
  
  