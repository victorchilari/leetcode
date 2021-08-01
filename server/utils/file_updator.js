const sidebar = require('../../sidebars').docs.shift(); // without intro page

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

module.exports = {
	updateSidebar
};
