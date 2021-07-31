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

module.exports = {
	appendInFile,
	createPath,
	writeInFile
};
