const fs = require('fs');
// const languages = require('./languages.js');
const data = require('./languages.js');

(() => {
	const res = data.map((country) => {
		country.languages = country.languages
			.map((language) => language.name)
			.toString();
		return country;
	});
	const json1 = JSON.stringify(res);
	fs.writeFile('./countries.json', json1, () => {});
})();

// const convertObjToArr = (obj) => {
// 	const keys = Object.keys(obj);
// 	const values = Object.values(obj);

// 	const result = [];

// 	keys.map((key, idx) => {
// 		const temp = {};
// 		temp['name'] = key;
// 		temp['code'] = values[idx];

// 		result.push(temp);
// 	});

// 	return result;
// };
