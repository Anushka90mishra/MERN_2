function reverseNumber(x) {
    var reverse = 0;
    while(x !== 0) {
        var digit = x % 10;
        reverse = reverse * 10 + digit;
        x = Math.floor(x / 10);
    }
    return reverse;
}

var x = 32243;
console.log(reverseNumber(x)); // Expected Output : 34223