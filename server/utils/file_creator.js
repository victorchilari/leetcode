const fsh = require('./fs_helper');
const types = require('./types');
const {trycatch} = require('./frequently');
const sidebar = require('../../sidebars').docs;
console.log(sidebar);

function createConditionFile(filePath, data) {
	trycatch(async () => {
		fsh.createPath(filePath);
		await fsh.writeInFile(
			filePath,
			"import React from 'react';\n\nexport default () => (\n"
		);
		await fsh.appendInFile(filePath, data);
		await fsh.appendInFile(filePath, '\n);');
	});
}

function createSolutionFile(filePath, data) {
	trycatch(async () => {
		fsh.createPath(filePath);
		await fsh.writeInFile(
			filePath,
			'```' + data.lang || process.env.SOLUTION_LANG + '\n'
		);
		await fsh.appendInFile(filePath, data.code);
		await fsh.appendInFile(filePath, '\n```');
	});
}

/**
 * @param {string} title
 * @param {string} condition
 * @param {{code: string, lang: string, method: string}} solution
 * @param {string[]} whatToDo
 */
function create({title, condition, solution, whatToDo = []}) {
	const correctTitle = title.toLowerCase().replace(/ /g, '-');

	//todo: trycatch
	if (whatToDo.includes(types.CONDITION.toLowerCase())) {
		createConditionFile(`docs/__conditions/${correctTitle}.condition.jsx`, condition);
	}
	if (whatToDo.includes(types.SOLUTION.toLowerCase())) {
		createSolutionFile(
			`docs/${solution.method.toLowerCase()}/${correctTitle}.solution.${solution.method.toLowerCase()}.mdx`,
			solution
		);
	}
}

module.exports = {
	create
};
