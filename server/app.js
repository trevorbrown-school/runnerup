import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const FILE = './users.json';
const PORT = 5000;

const fetchDb = () => JSON.parse(fs.readFileSync(FILE));
const saveDb = () => {
    fs.writeFileSync(FILE, JSON.stringify(db));
    console.log('Database saved!');
    return db;
};

const app = express();
const db = fetchDb();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(db);
    saveDb();
});

app.post('/', (req, res) => {
    db.users.push(req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}!`);
});
