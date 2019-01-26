const formatDateUserTime = (dateString, formatString) => {

    dateString = dateString.trim();

    console.log(dateString);

    return moment(dateString).tz(moment.tz.guess()).format(formatString);

}