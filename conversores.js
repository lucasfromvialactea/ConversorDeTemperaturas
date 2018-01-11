var FtoC = function (f) {
    return (f - 32) * 5 / 9;
    // return (f - 32) / (9 / 5);
    // return (f - 32) / 1.8;
}

var CtoF = function (c) {
    return c * 9 / 5 + 32;
    // return c * 1.8 + 32;
}

var KtoC = function (k) {
    return k - 273.15;
}

var CtoK = function (c) {
    return c + 273.15;
}

var KtoF = function (k) {
    // return k * 9 / 5 - 459.67;
    return 273.15 + (k - 32) * 5 / 9;
}

var FtoK = function (f) {
    return (f + 459.67) * 5 / 9;
    // return 273.15 + (f - 32) * 5 / 9;
}

// Tests

console.log(FtoC(23)); // -5
console.log(CtoF(-5)); // 23
console.log(KtoC(25)); // 248.15
console.log(CtoK(248.15)); // 521.3
console.log(KtoF(20)); // -423.67
console.log(FtoK(-423.67)); // 20
