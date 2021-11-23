$(function () {
    let calcLoveTime = setInterval(function () {
        let date_future = new Date();
        let date_now = new Date('Sat Nov 06 2021 19:07:00');

        let seconds = Math.floor((date_future - (date_now)) / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

        let showMinute = "minuten";
        let showSecond = "seconden";

        if (minutes == 1) {
            showMinute = "minuut";
        }

        if (seconds == 1) {
            showSecond = "seconde";
        }

        $("#time").text("We zijn al " + days + " dagen, " + hours + " uur, " + minutes +  " "+ showMinute + " en "  + seconds + " " + showSecond + " samen");
    }, 1000);
});