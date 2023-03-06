/**
 * 根据value寻找对应的label
 * @param {Array || String} value
 * @param {Array} list
 * @param {Array || String} result
 * @returns Array || String
 */
export function getLabel(value, list, result) {
	let newList = list.reduce((newArr, item) => {
		if (Array.isArray(value)) {
			if (value.indexOf(item.value) != -1) {
				result.push(item.label);
				item.children && item.children.length && getLabel(value, item.children, result);
			}
		} else {
			value === item.value && (result = item.label);
		}
		return result;
	}, result);
	return newList;
}
