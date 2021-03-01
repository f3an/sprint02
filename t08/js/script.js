function checkBrackets(str) {

    let arr = [];
    //check type of string and check brackets
    //if the condition is not met returns -1
    if (!(typeof str === "string") || !str.match(/[()]/)) {
        return -1
    } else {

        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == "(") {
                arr.push("(");
            } else if (str.charAt(i) == ")") {
                arr.push(")")
            }
        }
        arr = arr.join("");
        for (let i = 0; i <= str.length; i++) {
            arr = arr.replace(/\(\)/, "")
        }
    }
    return arr.length;
}