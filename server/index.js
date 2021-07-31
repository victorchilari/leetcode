const express = require('express');
const {create} = require('./utils/file_creator');
const app = express();
const port = 5000;

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.put('/create', (req, res) => {
	console.log(req.query);
	console.log(req.body);
	const info = {};
	info.type = req.query.type;
	info.content = req.body;
	// texts.push(info);
	console.log(info);
	create({
		title: 'hey',
		condition: req.body,
		solution: 'it is a solution',
		whatToDo: [req.query.type]
	});
	res
		.status(200)
		.send({
			message: 'Hello World!___________________'
		})
		.end();
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
