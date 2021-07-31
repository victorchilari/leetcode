function trycatch(callback) {
	try {
		callback();
	} catch (err) {
		throw new Error(err);
	}
}

module.exports = {
	trycatch
};
