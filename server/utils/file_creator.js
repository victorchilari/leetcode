const fsh = require('./fs_helper');
const types = require('./types');
const {trycatch} = require('./frequently');

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
	const correctTitle = title
		.toLowerCase()
		.replace(/^\d+\. /, '')
		.replace(/ /g, '-');

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

	//todo update sidebar just after create doc file
	// updateSidebar(data.method, correctTitle);
	//* do it incapsulated
}

module.exports = {
	create
};
