function total(addCount, addPrice, currentTotal = 0) {
    let result = ((addCount * addPrice) + Number(currentTotal)).toFixed(2);
    return result;
}