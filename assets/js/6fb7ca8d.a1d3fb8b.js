(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[437],{1806:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return a},toc:function(){return f},default:function(){return v}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),s=["components"],l={},u=void 0,a={unversionedId:"bfs/average-of-levels-in-binary-tree-solution",id:"bfs/average-of-levels-in-binary-tree-solution",isDocsHomePage:!1,title:"average-of-levels-in-binary-tree-solution",description:"`js",source:"@site/docs/bfs/average-of-levels-in-binary-tree-solution.mdx",sourceDirName:"bfs",slug:"/bfs/average-of-levels-in-binary-tree-solution",permalink:"/leetcode/bfs/average-of-levels-in-binary-tree-solution",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"637. Average of Levels in Binary Tree \ud83d\udd35",permalink:"/leetcode/bfs/average-of-levels-in-binary-tree"}},f=[],c={toc:f};function v(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar averageOfLevels = function (root) {\n    let to_visit = [root];\n\n    const sum_per_levels = [];\n    let how_much_nodes = 1;\n\n    while (how_much_nodes) {\n        let sum_for_this_row = 0;\n\n        for (let i = 0; i < how_much_nodes; i++) {\n            const current = to_visit.shift();\n            sum_for_this_row += current.val;\n            if (current.left) to_visit.push(current.left);\n            if (current.right) to_visit.push(current.right);\n        }\n        sum_per_levels.push(sum_for_this_row / how_much_nodes);\n        how_much_nodes = to_visit.length;\n    }\n    return sum_per_levels;\n};\n")))}v.isMDXComponent=!0}}]);