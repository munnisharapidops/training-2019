today = new Date()
past = new Date(2018,06,11)

function calcDate(date1,date2) {
    let diff = Math.floor(date1.getTime() - date2.getTime());
    let day = 1000 * 60 * 60 * 24;

    let days = Math.floor(diff/day);
    let months = Math.floor(days/31);
    let years = Math.floor(months/12);

    let message = date2.toDateString();
    message += " was "
    message += days + " days " 
    message += months + " months "
    message += years + " years ago \n"

    return message;
    }


a = calcDate(today,past);
console.log(a) ;
