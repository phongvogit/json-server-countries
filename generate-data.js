// const fs = require('fs');
// const data = require('./data');

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

// (() => {
// 	let obj = {};
// 	data.map((item) => (obj[item.region] = ''));
// 	const keys = Object.keys(obj);
// 	console.log(keys);
// 	// fs.writeFile('./regions.json', json);
// })();
