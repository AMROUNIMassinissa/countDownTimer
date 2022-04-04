const newYears = "1 Jan 2023";

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    /* console.log(newYearDate);
            console.log(currentDate);
            console.log((newYearDate - currentDate) / 86400000); */
    return newYearDate - currentDate;
}
//ajout 0 au debut
function add_leading_zero(number) {
    if (number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}

window.setInterval(function() {
    var totalSeconds = Math.floor(countdown() / 1000);
    //console.log(totalSeconds);
    var days = Math.floor(totalSeconds / 3600 / 24);
    //console.log(days);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    //console.log(hours);
    var minuts = Math.floor(totalSeconds / 60) % 60;
    //console.log(minuts);
    var seconds = Math.floor(totalSeconds % 60);
    //console.log(seconds);
    document.getElementById("sec").innerHTML = add_leading_zero(seconds);
    document.getElementById("mins").innerHTML = add_leading_zero(minuts);
    document.getElementById("hour").innerHTML = add_leading_zero(hours);
    document.getElementById("day").innerHTML = add_leading_zero(days);
}, 10);