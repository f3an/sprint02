function sortEvenOdd(x) {
    function check(a, b) {
        return a % 2 - b % 2
    }

    function secondcheck(a, b) {
        return a - b
    }
    (x.sort(secondcheck).sort(check));
}