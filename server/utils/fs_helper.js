const fs = require('fs').promises;
const path = require('path');

async function _isExist(path) {
	try {
		await fs.access(path);
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
			await fs.mkdir(dirname, {recursive: true});
		}
		return exist;
	} catch (err) {
		throw new Error(err);
	}
}

async function writeInFile(filePath, data) {
	try {
		await fs.writeFile(filePath, data, 'utf8');
	} catch (err) {
		throw new Error(err);
	}
}

async function appendInFile(filePath, data) {
	try {
		await fs.appendFile(filePath, data, 'utf8');
	} catch (err) {
		throw new Error(err);
	}
}

module.exports = {
	appendInFile,
	createPath,
	writeInFile
};
