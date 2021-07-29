const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'LeetCode Patterns - Solutions',
	tagline: 'FAANG are waiting for me :)',
	url: 'https://victorchilari.github.io',
	baseUrl: '/leetcode/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'https://assets.leetcode.com/static_assets/public/icons/favicon-96x96.png',
	organizationName: 'victorchilari', // Usually your GitHub org/user name.
	projectName: 'leetcode', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Solutions for LeetCode Patterns',
			logo: {
				alt: 'My Site Logo',
				src: 'https://assets.leetcode.com/static_assets/public/icons/favicon-192x192.png'
			},
			items: [
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'Doc'
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
							to: '/'
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
						// {
						// 	label: 'Blog',
						// 	to: '/blog'
						// },
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
					routeBasePath: '/'
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	]
};
