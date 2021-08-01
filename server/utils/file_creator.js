require('dotenv').config();
const env = process.env;

const fsh = require('./fs_helper');
const types = require('./types');
const levelSignes = require('./level_signes.json')[env.CONDITION_LEVEL_TYPE];

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

function createSolutionFile(filePath, {lang = env.SOLUTION_LANG, code}) {
	trycatch(async () => {
		fsh.createPath(filePath);
		await fsh.writeInFile(filePath, '```' + lang.toLowerCase() + '\n'); // before code
		await fsh.appendInFile(filePath, code);
		await fsh.appendInFile(filePath, '\n```'); // after code
	});
}

function createTaskFile({filePath, fileName, level, urlName, method}) {
	const stringBeforeImport = `# ${fileName} ${levelSignes[level.toLowerCase()]}\n\n`;
	const stringAfterImport =
		'\n## Condition\n\n<Condition />\n\n## Solution\n\n<Solution />';

	const stringImportCondition = `import Condition from './../__conditions/${urlName}.condition';\n`;
	const stringImportSolution = `import Solution from './${urlName}.solution.${method}.mdx';\n`;

	trycatch(async () => {
		fsh.createPath(filePath);
		await fsh.writeInFile(filePath, stringBeforeImport);
		await fsh.appendInFile(filePath, stringImportCondition);
		await fsh.appendInFile(filePath, stringImportSolution);
		await fsh.appendInFile(filePath, stringAfterImport);
	});
}

/**
 * @param {string} title
 * @param {string} type
 * @param {{code: string, lang?: string, method?: string}} data
 */
function create({title, type, level, data}) {
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

		//* just after create file with solution, can create doc file
		createTaskFile({
			filePath: `docs/${data.method.toLowerCase()}/${correctTitle}.mdx`,
			fileName: title,
			level,
			urlName: correctTitle,
			method: data.method.toLowerCase()
		});
	}

	//todo update sidebar just after create doc file
	// updateSidebar(data.method, correctTitle);
	//* do it incapsulated
}

module.exports = {
	create
};
