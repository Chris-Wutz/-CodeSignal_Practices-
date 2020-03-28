function lateRide(n) {
    var hours = parseInt(n / 60);
    var minutes = n % 60;
    var sum = 0;

    var stringClock = hours.toString() + minutes.toString();

    stringClock.split("").forEach(num => sum += parseInt(num));

    return sum;
}
