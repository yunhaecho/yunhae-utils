Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/index.ts
function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}
//#endregion
exports.add = add;
exports.divide = divide;
exports.multiply = multiply;
exports.subtract = subtract;
