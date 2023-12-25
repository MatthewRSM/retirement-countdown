// Set the date we're counting down to
var countDownDate = 1735707600000;

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (86400000));
    var hours = Math.floor((distance % (86400000)) / (3600000));
    var minutes = Math.floor((distance % (3600000)) / (60000));
    var seconds = Math.floor((distance % (60000)) / 1000);

    var daysStr = " days<br>";
    var hoursStr = " hours<br>";
    var minutesStr = " minutes<br>";
    var secondsStr = " seconds<br>";

    if (days == 1) {

        daysStr = " day<br>";

    }
    else {

        daysStr = " days<br>";

    } 

    if (hours == 1) {

        hoursStr = " hour<br>";

    }
    else {

        hoursStr = " hours<br>";

    } 

    if (minutes == 1) {

        minutesStr = " minute<br>";

    }
    else {

        minutesStr = " minutes<br>";

    } 

    if (seconds == 1) {

        secondsStr = " second<br>";

    }
    else {

        secondsStr = " seconds<br>";

    } 

    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + daysStr + hours + hoursStr + minutes + minutesStr + seconds + secondsStr;
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "CONGRATULATIONS";
    }

}, 1000);

function share() {

    navigator.clipboard.writeText("https://robinsretirementcountdown.com");

}

