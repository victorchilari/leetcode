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

To add new condition you need to create a file in `docs/__condtions/` with name which is used in URL of the page on [LeetCode](https://leetcode.com/) with problem which you want to insert in this project (ex. https://leetcode.com/problems/**contains-duplicate**/ - file's neme will be `contains-duplicate`). Use `.jsx` for file's extension. The pattern to use:

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
5. Where is used this mathematical signes: `<`, `>`, replace them with: `&lt;` and `&mt;` respectivly.

Yes, this method is a bit sophisticated, especially to automate this process, a special page has been created, the instruction is [here]().
