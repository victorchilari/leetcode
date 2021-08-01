const express = require('express');
const {create} = require('./utils/file_creator');
const app = express();
const port = 5000;

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.put('/create', (req, res) => {
	create({
		title: '123. Two Sum',
		type: req.query.type,
		data: {
			code: req.body,
			lang: req.query.lang,
			method: req.query.method
		}
	});
	res
		.status(200)
		.send({
			message: 'Hello World!___________________'
		})
		.end();
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
