const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');
const api = require('./routes/apiRoutes.js');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use('/api/apiRoutes', api);


app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.listen(PORT, () => {
  console.log(`Api now installed ${PORT}`);
});
