const fs = require('fs');
const uuid = require('../public/assets/helpers/uuid');
const router = express.Router();


router.get('/',(req,res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        } else {
            const notes = JSON.parse(data);
            res.json(notes);
        }
    });
});


router.post('/', (req,res) => {
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    }
fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if(err) {
        throw err;
    } else {
        const notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFile(
            './db/db.json',
            JSON.stringify(notes, null, 4),
            (err, data) => {
                if(err) {
                    throw err;
                }
                res.json({data: req.body, message: "success!"});
            }
        );
    }
});
});



module.exports = router;