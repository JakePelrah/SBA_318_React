import express from 'express'
import { fileURLToPath } from 'node:url'
import path, { join } from 'node:path';
import sqlite3 from 'sqlite3';
import game from "./game.json" with { type: "json" };
import database from "./database.json" with { type: "json" };

const port = 3000
const app = express()


const __dirname = path.dirname(fileURLToPath(import.meta.url))

const db = new sqlite3.Database(join(__dirname, 'src/db', 'questions.db'), databaseCB);


app.use(express.json())
app.use(express.static(join(__dirname, 'dist')));


app.get('/game', (req, res) => {

    console.log(game)
    res.json(game)

    // console.log('here')
    // db.all('SELECT * FROM questions', [], (err, rows) => {
    //     if (err) {
    //         res.json({})
    //         throw err;
    //     }
    //     rows = rows.map(row => ({ ...row, answers: JSON.parse(row.answers) }))
    //     res.json(rows)
    // });
})


app.post('/createQuestion', (req, res) => {
    let { id, category, question, answers } = req.body

    let correctAnswers = Object.values(answers).filter(item => typeof item === 'boolean')
    answers = Object.values(answers).filter(item => typeof item === 'string')

    answers = JSON.stringify(answers)
    correctAnswers = JSON.stringify(correctAnswers)

    db.run("INSERT INTO questions VALUES(?, ?, ?, ?, ?)", [id, category, question, answers, correctAnswers])
    res.json({})
})
app.get('/getAnswers/:category', (req, res) => {

    const { category } = req.params
    console.log(req.params, category)
    db.all('SELECT * FROM questions WHERE category = ?', [category], (err, rows) => {
        if (err) {
            res.json({})
            throw err;
        }
        console.log(rows)
        rows = rows.map(row => ({ ...row, answers: JSON.parse(row.questions) }))
        res.json(rows)
    });
})

// handle client routing, return all requests to the app
app.get('*', (_req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// db.serialize(() => {
//     db.run(`CREATE TABLE IF NOT EXISTS questions (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         question TEXT NOT NULL,
//         category TEXT NOT NULL,
//         answers TEXT NOT NULL
//       )`);

// // Insert a record
// const stmt = db.prepare("INSERT INTO questions (question, category, answers) VALUES (?, ?, ?)");
// stmt.run("What is the capital of France?", "Geography", JSON.stringify(["Paris", "London", "Berlin"]));
// stmt.finalize();

// Query the record
//     db.each("SELECT id, question, category, answers FROM questions", (err, row) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log(`ID: ${row.id}`);
//         console.log(`Question: ${row.question}`);
//         console.log(`Category: ${row.category}`);
//         console.log(`Answers: ${JSON.parse(row.answers)}`);
//     });
// });

// db.close();




function databaseCB(err) {
    if (null) {

        //database connected
    }
    else {
        //log error
    }
}
