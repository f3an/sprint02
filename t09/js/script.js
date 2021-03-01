function appendLeadingZeroes(n) {
    if (n <= 9) {
        return "0" + n
    }
    return n
}

let getFormattedDate = (x) => {

    let date = appendLeadingZeroes(x.getDate()) + "." +
        appendLeadingZeroes(x.getMonth() + 1) + "." +
        x.getFullYear() + " " +
        appendLeadingZeroes(x.getHours()) + ":" +
        appendLeadingZeroes(x.getMinutes()) + " " +
        dayweek(x);

    return date;
}

let dayweek = (a) => {
    let x = a.getDay()

    switch (x) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        default:
            return ""
    }
}