const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { response } = require('../../../01-Activities/24-Stu_Custom-Middleware/Unsolved/routes');
const app =express();


app.get('api/notes',(req, res)=> {
    console.log('GET note req');

    let data= JSON.parse(fs.readFileSync('./db/db.json'));
    console.log('GET req - return notes data:' = JSON.stringify(data));

    response.json(data);
});

app.post('/api/notes',(req,res)=> {

    const newNote = request.body;

    console.log('post request - New note :' + JSON.stringify(newNote));

    newNote.id = uuidv4();
    let data= JSON.parse(fs.readFileSync('./db/db.json'));
    data.push(newNote);
    
    fs.writeFileSync('./db/db.json',JSON.stringify(data));
    console.log('new note added!');
    response.json(data);
    
});

module.exports = app;