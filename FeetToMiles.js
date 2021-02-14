convertFeetToMile(feet) {
    return this.roundTo(feet * 0.000189393939, 5);
}

convertMileToFeet(miles) {
    return this.roundTo(miles * 5280.0, 2);
}

roundTo(n, digits) {
    var negative = false;

    if (digits === undefined) {
        digits = 0;
    }
    if (n < 0) {
        negative = true;
        n = n * -1;
    }

    const multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = (Math.round(n) / multiplicator).toFixed(2);
    if (negative) {
        n = (n * -1).toFixed(2);
    }

    return n;
}