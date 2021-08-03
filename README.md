# LeetCode Solutions

## About

This is a repository where I collect my code solucions from [LeetCode](https://leetcode.com/).
[My profile on LeetCode](https://leetcode.com/victor1chilari1/) (if you want to see how active I'm on this platform 😁 PS: not very active).

This README file contains description about how to work with this repository. If you are in search for how to use the final product (website/documentation), how easly navigate throw them, watch [intro](https://victorchilari.github.io/leetcode/).

## Commands after you copied this repository

This command create a .sh file which runs before execut `git commit` and preaty staged files.

### Installation

```console
npm install
```

### Local Development

```console
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment on GitHub Pages

```console
npm run deployOnGitHub
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch. If firstly so `push` and secondly deploy, in `gh-page` will push a commit linked to the last commit from the main branch of the repository, otherwise will be linked to a commit internal for this branch.

## Where to go, what to change?

### Create content without special instrument

Path `docs/` contains all files that are used to create documentation (pages with condition and solution).

#### Create condition

To add new condition you need to create a file in `docs/__condtions/` with name which is used in URL of the page on [LeetCode](https://leetcode.com/) with problem which you want to insert in this project (ex. https://leetcode.com/problems/**contains-duplicate**/ - condition's name will be `contains-duplicate`) Use `.jsx` for file's extension. The pattern to use:

<!-- prettier-ignore-start -->
```jsx
import React from 'react';

export default () => (
	// copy-paste the condition here
);
```
<!-- prettier-ignore-end -->

After file was created, copy-paste previous pattern without saving changes. Now you need to copy-paste condition's code and refactor it following this steps:

1. Copy content inside of div with same class: `class="content__u3I1 question-content__JfgR"` - in result you will have in clipboard a div with others tags.
2. Paste this content instead this comment: `// copy-paste the condition here`.
3. Remove all `<p>&nbsp;</p>`.
4. Before same lines: `<strong>Output:</strong>`, need to paste tag: `<br/>`
5. Where is used this mathematical signs: `<`, `>`, replace them with: `&lt;` and `&mt;` respectivly.

Yes, this method is a bit sophisticated, especially to automate this process, a special page has been created, the instruction is [here]().

#### Create solution

Before to create a file with solution, you need to understand which pattern you used, read [here](https://github.com/seanprashad/leetcode-patterns/blob/e2147d008eb3b1320f600b36652d3906aaf106e2/README.md#tips-to-consider).

After you understand the pattern to which your solution refers, open/create the folder corresponding to the pattern.
Create a file whose name satisfies the next pattern: <code>**task's name**.solution.**pattern**.mdx</code>. **Task's name** is taked from URL of the page on [LeetCode](https://leetcode.com/) with problem which you want to insert in this project (ex. https://leetcode.com/problems/**contains-duplicate**/ - task's name will be `contains-duplicate`). The **pattern** used was determined when you decided in which folder you would create the solution file.

The next steps are easier than the previous ones 🙂

1. Insed of file use this pattern for first line: <code>```**language in which is wrote solution's code**</code>.
2. In the third line write: <code>```</code>.
3. In the second line copy-paste solution's code.

#### Create web-page for resolved task

Next to the file with the solution we want to display in the "documentation", we create a file with the name: <code>**task_name**.mdx</code>.

**Condition's title** - condition's title looks like this: `217. Contains Duplicate`. If it is not clear, open taks's page on LeetCode, in browser's console use this command: `document.querySelector('[data-cy="question-title"').innerText` - in console will apeare a string which contains what I call "condition's title".

**Condition's level** - easy | medium | hard. Inside of Task's page will need to use special sign. Type of sign is indicated in the root file `.env` in parrameter `CONDITION_LEVEL_TYPE`. After you saw "signs' type", watch the file `server/utils/level_signs.json` and pick singe which is asociated for level of your condition's level.

1. First line will contains: <code>**condition_title** **condition_level_sign**</code>.
2. Import condition and solution like components. Naming will be respectivly: `Condition` and `Solution`
3. Write a header of level 2 in markdown's style. Content: `Condition`. Below, insert `<Condition/>`
4. Write a header of level 2 in markdown's style. Content: `Solution`. Below, insert `<Solution/>`

##### Exemple of a file for same page:

Path for this file: `docs/arrays/contains-duplicate.mdx`

```mdx title="contains-duplicate.mdx"
# 217. Contains Duplicate 🔵

import Condition from './../__conditions/contains-duplicate.condition';
import Solution from './contains-duplicate.solution.arrays.mdx';

## Condition

<Condition />

## Solution

<Solution />
```
