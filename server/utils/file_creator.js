const fsh = require('./fs_helper');
const types = require('./types');
const {trycatch} = require('./frequently');
const sidebar = require('../../sidebars').docs;
sidebar.shift(); // remove intro page

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

function updateSidebar(method, urlTitle) {
	//! improve logic that calculate which name will be add in sidebar
	// now it take name from request - its good concept, but is wrong logic
	//* lets take name after create doc
	const group = sidebar.find(
		category => category.label.toLowerCase() === method.toLowerCase()
	);

	if (Object.keys(group).length > 0) {
		const pathToPage = `${method.toLowerCase()}/${urlTitle}`;

		if (group.items.includes(pathToPage)) {
			throw new Error(`Solution for ${urlTitle} resolved with ${method} - exist`);
		}

		const oldLine = group.items;
		const newLine = [...group.items, pathToPage];
		fsh.replaceInFile('sidebars.js', oldLine, newLine, true);
	}
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

	//todo update sidebar just after create doc file
	// updateSidebar(data.method, correctTitle);
}

module.exports = {
	create
};
