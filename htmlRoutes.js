const path = require('path');
const app = express();


app.get('./note', (res, req)=> {
    res.sendFile(path.join(__dirname,'./../public/notes.html'));
});


app.get('*', (res, req)=> {
    res.sendFile(path.join(__dirname,'./../public/index.html'));
})
module.exports = app;