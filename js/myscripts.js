// Set the date we're counting down to
var countDownDate = new Date("12/31/2024 24:00:00 EST").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + " days<br>" + hours + " hours<br>" + minutes + " minutes<br>" + seconds + " seconds<br>";
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "CONGRATULATIONS";
    }

}, 1000);

function share() {

    navigator.clipboard.writeText("Robin retires in " + document.getElementById("countdown").innerHTML + ". Keep track at robinsretirementcountdown.com!");

}

