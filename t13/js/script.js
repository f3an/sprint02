function Calculator() {}

Calculator.prototype.init = function(x) {
    if (isNaN(x)) {
        alert("err");
    } else {
        this.result = Number(x);
        return this;
    }
}

Calculator.prototype.add = function(x) {
    if (isNaN(x) || this.result === undefined) {
        alert("err");
    } else {
        this.result += Number(x);
        return this;
    }
}
Calculator.prototype.mul = function(x) {
    if (isNaN(x) || this.result === undefined) {
        alert("err");
    } else {
        this.result *= Number(x);
        return this;
    }
}
Calculator.prototype.div = function(x) {
    if (isNaN(x) || this.result === undefined) {
        alert("err");
    } else {
        this.result /= Number(x);
        return this;
    }
}
Calculator.prototype.sub = function(x) {
    if (isNaN(x) || this.result === undefined) {
        alert("err");
    } else {
        this.result -= Number(x);
        return this;
    }
}
Calculator.prototype.alert = function(x) {
    alert(this.result);
}