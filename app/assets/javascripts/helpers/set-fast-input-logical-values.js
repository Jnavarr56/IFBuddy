const setCalendarDateMin = calendarInputID => {

    let today = new Date(),
        todayAsHTMLValue = `${today.getFullYear()}-${today.getMonth() + 1 <= 9 ? '0' + (today.getMonth() + 1).toString() : today.getMonth()}-${today.getDate() <= 9 ? '0' + today.getDate().toString() : today.getDate()}`;

    $(`#${calendarInputID}`)[0].min = todayAsHTMLValue;

    $(`#${calendarInputID}`).val(todayAsHTMLValue);

}

const setTimeVal = timeInputID => {

    let today = new Date(),
        todayAsHTMLValue = `${today.getHours() <= 9 ? '0' + (today.getHours()).toString() : today.getHours()}:${today.getMinutes() <= 9 ? '0' + (today.getMinutes()).toString() : today.getMinutes()}`;    

    $(`#${timeInputID}`).val(todayAsHTMLValue);
}