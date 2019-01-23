const formatDateUserTime = (dateString, formatString) => {

    return moment(dateString).tz(moment.tz.guess()).format(formatString);

}