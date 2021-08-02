const fs = require('fs');
const path = require('path');

async function _isExist(path) {
	try {
		await fs.promises.access(path);
		return true;
	} catch {
		return false;
	}
}

async function createPath(filePath) {
	try {
		const dirname = path.dirname(filePath);
		const exist = await _isExist(dirname);
		if (!exist) {
			await fs.promises.mkdir(dirname, {recursive: true});
		}
		return exist;
	} catch (err) {
		throw new Error(err);
	}
}

async function writeInFile(filePath, data) {
	try {
		await fs.promises.writeFile(filePath, data, 'utf8');
	} catch (err) {
		throw new Error(err);
	}
}

async function appendInFile(filePath, data) {
	try {
		await fs.promises.appendFile(filePath, data, 'utf8');
	} catch (err) {
		throw new Error(err);
	}
}

function replaceInFile(filePath, oldValue, newValue, isPaseIntoArray = false) {
	fs.readFile(filePath, 'utf-8', function (err, data) {
		if (err) throw err;

		if (isPaseIntoArray) {
			newValue = JSON.stringify(newValue)
				.replace(/\"/g, '')
				.replace(/\[|\]/g, '')
				.replace(/\,/g, "', '");
		}

		const wholeNewText = data.replace(oldValue, newValue);
		fs.writeFile(filePath, wholeNewText, 'utf-8', function (err, data) {
			if (err) throw err;
		});
	});
}

// replaceInFile('docs/arrays/contains-duplicate.mdx', '<Solution />', 'asd');
// replaceInFile(
// 	'sidebars.js',
// 	JSON.stringify(['arrays/contains-duplicate']).replace(/"/g, "'"),
// 	JSON.stringify(['arrays/contains-duplicate', 'asd']).replace(/"/g, "'"),
// 	'asd'
// );

module.exports = {
	appendInFile,
	createPath,
	replaceInFile,
	writeInFile
};
