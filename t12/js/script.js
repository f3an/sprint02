function concat(string1, string2) {

    arg.count = 0;

    function arg() {
        let string2 = prompt('Enter second string!');
        arg.count++;
        if (string2 === null) {
            return string1
        };
        return string1 + ' ' + string2;
    };

    if (string2 === undefined) {
        return arg;
    } else {
        return string1 + ' ' + string2;
    }
}