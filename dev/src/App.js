const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

function loadJson(path) {
  return JSON.parse(fs.readFileSync(path));
}

function saveJson(path, data) {
  const callback = () => {
    console.log('queued');
  }
  fs.writeFile(path, data, callback);
}

var DB = loadJson('src/data.json')

app.use('/', express.static('./client/build'));

app.get('/api/getWords', (req, res) => {
  DB = loadJson('src/data.json')
  let {wiseWords, author, title} = DB['queue'][Math.floor(Math.random()*DB.queue.length)];

	return res.send({wiseWords, author, title});
});

app.post('/api/queueWords', (req, res) => {
  let wiseWords = req.body.words.split('\\');
  wiseWords = wiseWords.map((txt)=>{return txt.trim()})
  let author = req.body.author.trim();
  let title = req.body.title.trim();

  DB = loadJson('src/data.json')
  if (DB['queue'].length >= 100) {
    DB['queue'][Math.floor(Math.random()*DB.queue.length)] = {wiseWords, author, title};
  } else {
    DB['queue'].push({wiseWords, author, title});
  }
  saveJson('src/data.json', JSON.stringify(DB, null, 4))

  return res.status(200).send('Successful Queue!');
});


const PORT = process.env.PORT
app.listen(PORT, ()=> {
	console.log(`Listening on Port: ${PORT}`)
});
