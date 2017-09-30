function toQueryPair(key, value) {

	if (typeof value == 'undefined') {

		return key;

	}

	return key + '=' + encodeURIComponent(value === null ? '': String(value));

}

function queryStringify (obj) {

	var ret = [];
	for (var key in obj) {
		key = encodeURIComponent(key);
		var values = obj[key];
		if (values && values.constructor == Array) { //数组
			var queryValues = [];

			for (var i = 0,
						 len = values.length,
						 value; i < len; i++) {
				value = values[i];
				queryValues.push(toQueryPair(key, value));
			}
			ret = ret.concat(queryValues);

		} else { //字符串
			ret.push(toQueryPair(key, values));
		}
	}
	return ret.join('&');

}

function ajax (options) {

	const BASE_URL = 'https://m.lechebang.com';

	const URL  = BASE_URL + options.url;

	let headers = {

		'Content-Type':'application/x-www-form-urlencoded'

	}

	headers = Object.assign({headers},options.headers);

	var promise  = new Promise ((resolve,reject) => {

		fetch( URL, {

			method: options.type,

			headers: headers,

			body: JSON.stringify(options.data)

		}).then((response) => {

				if (response.ok && response.status==200) {

					return response.json();

				} else {

					return response.json();

				}
		}).then((json) => {

			resolve(json);

		}).catch((error) => {

			console.error(error);

		})

	})

	return promise;
}

export default {
	ajax
}