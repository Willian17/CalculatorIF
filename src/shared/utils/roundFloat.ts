export function roundFloat(value: any, exp) {
	// Se exp é indefinido ou zero...
	if (typeof exp === 'undefined' || +exp === 0) {
		return Math['ceil'](value);
	}
	value = +value;
	exp = +exp;
	// Se o valor não é um número ou o exp não é inteiro...
	if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
		return NaN;
	}
	// Transformando para string
	value = value.toString().split('e');
	value = Math['ceil'](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
	// Transformando de volta
	value = value.toString().split('e');
	const result = +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	return result;
}