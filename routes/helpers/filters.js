var exports = {
	filterByKeys: function (obj, keyArr) {
	var resultObj = {}
	var keys = Object.keys(obj);
	keyArr.forEach(function (k) {
		if (keys.indexOf(k) >= 0) {
			resultObj[k] = obj[k];
		}
	})
	return resultObj;
	}
}

module.exports = exports;