function countDown(seconds) {
    var timer = document.getElementById("timer"); // Timer ID
    // Show the remaining seconds
    console.log(seconds);

    if (seconds > 0) {
        // Get time to just after next full second
        var lag = 1020 - new Date().getMilliseconds();
        setTimeout(function(){countDown(--seconds)}, lag);
        timer.innerHTML = "Vous avez perdu dans " + seconds + " secondes."; // Timer Message
    }
    else if (seconds == 0){
        document.location.href="/end.html";
    }
}
