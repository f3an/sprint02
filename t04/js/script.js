function checkprompt(beginRange, endRange) {
    if (
        beginRange === " " ||
        endRange === " " ||
        beginRange === null ||
        endRange === null ||
        beginRange >= endRange
    ) {
        alert("The default range is from 1 to 100")
        beginRange = 1;
        endRange = 100;
    }
    for (let i = beginRange; i < endRange; i++) {
        let result = i;
        if (!(i % 2) && !(i % 3) && !(i % 10)) {
            result += " is even, a multiple of 3 and 10";
        } else if (!(i % 2) && !(i % 3) && !(i % 10)) {
            result += " is even, a multiple of 3 and 10";
        } else if (!(i % 10) && !(i % 2)) {
            result += " is even, a multiple of 10";
        } else if (!(i % 3) && !(i % 2)) {
            result += " is even, a multiple of 3";
        } else if (!(i % 3)) {
            result += " is multiple of 3";
        } else if (!(i % 10)) {
            result += " is multiple of 10";
        } else {
            result += " -";
        }
        console.log(String(result));
    }
}

checkprompt(
    Number(prompt("Enter begin of range")),
    Number(prompt("Enter end of range"))
);