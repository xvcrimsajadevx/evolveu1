

function sumAdd(a, b) {
    a = Number(a);
    b = Number(b);
    let toBe = a + b;
    return toBe;
}

function sumSub(a, b) {
    a = Number(a);
    b = Number(b);
    let toBe = a - b;
    return toBe;
}

function sumMult(a, b) {
    a = Number(a);
    b = Number(b);
    let toBe = a * b;
    return toBe;
}

function sumDiv(a, b) {
    a = Number(a);
    b = Number(b);
    let toBe = a / b;
    return toBe;
}

export default { sumAdd, sumSub, sumMult, sumDiv };
