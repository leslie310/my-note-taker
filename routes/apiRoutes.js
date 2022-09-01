const fs = require('fs');
const uuid = require('../public/Assets/helpers/uuid.js');
const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
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
fs.readFile('./db.json', 'utf-8', (err, data) => {
    if(err) {
        throw err;
    } else {
        const notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFile(
            './db.json',
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
router.delete('/:id', (req,res) => {
    const { id } = req.params.id;
    console.log(id)
    console.log(req.params.id)
fs.readFile('./db.json', 'utf-8', (err, data) => {
    if(err) {
        throw err;
    } else {
        const notes = JSON.parse(data);
        notes.splice(0, 1);
        fs.writeFile(
            './db.json',
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