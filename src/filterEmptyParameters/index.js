/**
 * 过滤对象中空字段
 * @param {Object} filter 目标对象
*/
export function filterEmptyParameters(filter) {
	let filterTemp = {}
	for (var key in filter) {
	    let value = filter[key]
        if(Object.prototype.toString.call(value) === '[object Object]') {
            value = filterEmptyParameters(value)
        }
	    if (value !== null && value !== '' && value !== 'undefined' && value !== undefined && JSON.stringify(value) != '[]') {
	        filterTemp[key] = value
	    }
	 }
	 return filterTemp
}