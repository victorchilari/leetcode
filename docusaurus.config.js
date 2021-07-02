const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'LeetCode Patterns - Solutions',
	tagline: 'FAANG are waiting for me :)',
	url: 'https://victorchilari.github.io/leetcode/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'victorchilari', // Usually your GitHub org/user name.
	projectName: 'leetcode', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Solutions for LeetCode Patterns',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg'
			},
			items: [
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'Tutorial'
				}
				// {to: '/blog', label: 'Blog', position: 'left'},
				// {
				// 	href: 'https://github.com/facebook/docusaurus',
				// 	label: 'GitHub',
				// 	position: 'right'
				// }
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Solutions',
							to: '/docs/intro'
						}
					]
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Stack Overflow',
							href: 'https://stackoverflow.com/questions/tagged/docusaurus'
						},
						{
							label: 'Discord',
							href: 'https://discordapp.com/invite/docusaurus'
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/docusaurus'
						}
					]
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: '/blog'
						},
						{
							label: 'GitHub',
							href: 'https://github.com/victorchilari/leetcode'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} LeetCode Patterns - Solutions, author Chilari Victor.`
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme
		}
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	]
};
