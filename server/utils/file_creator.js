const fsh = require('./fs_helper');
const types = require('./types');
const {trycatch} = require('./frequently');
// const sidebar = require('../../sidebars').docs;
// const introPage = sidebar.shift();
// console.log(sidebar);

function createConditionFile(filePath, condition) {
	const stringBeforeCondition = "import React from 'react';\n\nexport default () => (\n";
	const stringAfterCondition = '\n);';
	trycatch(async () => {
		fsh.createPath(filePath);
		await fsh.writeInFile(filePath, stringBeforeCondition);
		await fsh.appendInFile(filePath, condition);
		await fsh.appendInFile(filePath, stringAfterCondition);
	});
}

function createSolutionFile(filePath, {lang, code}) {
	trycatch(async () => {
		fsh.createPath(filePath);
		await fsh.writeInFile(filePath, '```' + lang || process.env.SOLUTION_LANG + '\n'); // before code
		await fsh.appendInFile(filePath, code);
		await fsh.appendInFile(filePath, '\n```'); // after code
	});
}

/**
 * @param {string} title
 * @param {string} type
 * @param {{code: string, lang?: string, method?: string}} data
 */
function create({title, type, data}) {
	const correctTitle = title.toLowerCase().replace(/ /g, '-');

	//todo: trycatch
	if (type.toLowerCase() === types.CONDITION.toLowerCase()) {
		createConditionFile(`docs/__conditions/${correctTitle}.condition.jsx`, data.code);
	}
	if (type.toLowerCase() === types.SOLUTION.toLowerCase()) {
		createSolutionFile(
			`docs/${data.method.toLowerCase()}/${correctTitle}.solution.${data.method.toLowerCase()}.mdx`,
			data
		);
	}

	//* just after create file with solution, can create doc file
	// const group = sidebar.find(
	// 	category => category.label.toLowerCase() === data.method.toLowerCase()
	// );
	// sidebar.unshift(introPage);
	// group.items.push(`${data.method.toLowerCase()}/${correctTitle}`);
	// console.log(sidebar);
}

module.exports = {
	create
};
